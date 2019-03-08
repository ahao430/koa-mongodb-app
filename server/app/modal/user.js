let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match: /^\w{8,}$/
  },
  avatar: String,
  signature: String,
  sex: {
    type: Number,
    default: 0,
  },
  birthday: String,
  phone: {
    type: String,
    required: true,
    match: /^1[35678]\d{9}$/
  },
  createTime: {
    type: Date,
    dafault: Date.now()
  },
  updateTime: {
    type: Date,
    dafault: Date.now()
  },
});

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createTime = this.updateTime = Date.now();
  } else {
    this.updateTime = Date.now();
  }
  next();
});

class User {
  constructor () {
    // 创建model('user')，数据库写入models
    this.users = mongoose.model('user', UserSchema);
  }
  find (query = {}, skip = {}) {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.users.count(query, function (e, count) {
        if (e) {
          reject(e);
        } else {
          new Promise(function (resolve2, reject2) {
            self.users.find(query, null, skip, function (e, docs) {
              if (e) {
                reject(e);
              } else {
                resolve({
                  users: docs,
                  total: count,
                });
              }
            });
          });
        }
      });
    });
  }
  findOne (dataArr = {}) {
    const self = this;
    return new Promise(function (resolve, reject) {
      // 从user查找
      self.users.findOne(dataArr, function (e, doc) {
        if (e) {
          console.log('e:', e);
          reject(e);
        } else {
          resolve(doc);
        }
      });
    });
  }
  create (dataArr) {
    const self = this;
    return new Promise(function (resolve, reject) {
      let user = new self.users(dataArr);
      // 写入user
      user.save(function (e, data, numberAffected) {
        if (e) {
          reject(e);
        } else {
          resolve(data);
        }
      });
    });
  }
  update (option, dataArr) {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.users.update(option, dataArr, { runValidators: true }, function (e, data) {
        if (e) {
          reject(e);
        } else {
          resolve(data);
        }
      });
    });
  }
  delete (ids) {
    const self = this;
    return new Promise(function (resolve, reject) {
      // 从user删除
      self.users.remove({
        _id: {$in: ids}
      }, function (e, data) {
        if (e) {
          reject(e);
        } else {
          resolve(data);
        }
      });
    });
  }
}

let user = new User();
export {user};
