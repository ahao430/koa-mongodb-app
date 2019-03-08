import { user } from '../modal/user';
import { resdata, errdata } from '../../utils/serve';

const logUtil = require('../../utils/logUtil');

exports.getList = async (request) => {
  const pageNo = +request.query.pageNo || 1;
  const pageSize = +request.query.pageSize || 10;

  const skipOption = {
    skip: (pageNo - 1) * pageSize,
    limit: pageSize,
  };
  try {
    let data = await user.find({}, skipOption);
    return resdata('0000', 'success', data);
  } catch (err) {
    return errdata(err);
  }
};

exports.get = async (request) => {
  try {
    let data = await user.findOne({ _id: request.query._id });
    return resdata('0000', 'success', data);
  } catch (err) {
    return errdata(err);
  }
};
exports.add = async (request) => {
  let dataArr = {
    name: request.body.name,
    password: request.body.password,
    phone: request.body.phone,
    sex: request.body.sex || 0,
    signature: request.body.signature,
    birthday: request.body.birthday,
    avatar: request.body.avatar,
  };
  try {
    let respon = {};
    let newUser = await user.create(dataArr);
    respon = resdata('0000', 'success', newUser);
    return respon;
  } catch (err) {
    return errdata(err);
  }
};
exports.update = async (request) => {
  console.log(request);
  let dataArr = {
    name: request.body.name,
    password: request.body.password,
    phone: request.body.phone,
    sex: request.body.sex,
    signature: request.body.signature,
    birthday: request.body.birthday,
    avatar: request.body.avatar,
  };
  try {
    let item = await user.findOne({ _id: request.body._id });
    let respon = {};
    if (item) {
      let newUser = await user.update({ _id: request.body._id }, dataArr);
      respon = resdata('0000', 'update success', newUser);
    } else {
      respon = resdata('9999', 'the user is not exist');
    }
    return respon;
  } catch (err) {
    console.log(err);
    return errdata(err);
  }
};
exports.del = async (request) => {
  let ids = JSON.parse(request.query.ids);
  try {
    let respon = {};
    let list = await user.delete(ids);
    respon = resdata('0000', 'success', list);
    return respon;
  } catch (err) {
    return errdata(err);
  }
};
