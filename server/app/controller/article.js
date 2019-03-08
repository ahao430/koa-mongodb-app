import { article } from '../modal/article';
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
    let data = await article.find({}, skipOption);
    return resdata('0000', 'success', data);
  } catch (err) {
    return errdata(err);
  }
};

exports.get = async (request) => {
  try {
    let data = await article.findOne({ _id: request.query._id });
    return resdata('0000', 'success', data);
  } catch (err) {
    return errdata(err);
  }
};

exports.add = async (request) => {
  let dataArr = {
    author: request.body.author,
    title: request.body.title,
    desc: request.body.desc,
    content: request.body.content,
    category: request.body.category,
    comment: request.body.comment,
  };
  try {
    let respon = {};
    let newUser = await article.create(dataArr);
    respon = resdata('0000', 'success', newUser);
    return respon;
  } catch (err) {
    return errdata(err);
  }
};

exports.update = async (request) => {
  console.log(request);
  let dataArr = {
    author: request.body.author,
    title: request.body.title,
    desc: request.body.desc,
    content: request.body.content,
    category: request.body.category,
    comment: request.body.comment,
  };
  try {
    let item = await article.findOne({ _id: request.body._id });
    let respon = {};
    if (item) {
      let newUser = await article.update({ _id: request.body._id }, dataArr);
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
    let list = await article.delete(ids);
    respon = resdata('0000', 'success', list);
    return respon;
  } catch (err) {
    return errdata(err);
  }
};
