let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ArticleSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: String,
  content: {
    type: String,
    required: true,
  },
  category: String,
  comment: Array,
  createTime: {
    type: Date,
    dafault: Date.now()
  },
  updateTime: {
    type: Date,
    dafault: Date.now()
  },
});

ArticleSchema.pre('save', function (next) {
  // 每次修改自动更新时间
  if (this.isNew) {
    this.createTime = this.updateTime = Date.now();
  } else {
    this.updateTime = Date.now();
  }
  next();
});

class Article {
  constructor () {
    this.articles = mongoose.model('article', ArticleSchema);
  }
  find (query = {}, skip = {}) {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.articles.count(query, function (e, count) {
        if (e) {
          reject(e);
        } else {
          new Promise(function (resolve2, reject2) {
            self.articles.find(query, null, skip, function (e, docs) {
              if (e) {
                reject(e);
              } else {
                resolve({
                  articles: docs,
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
      self.articles.findOne(dataArr, function (e, doc) {
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
      let article = new self.articles(dataArr);
      // 写入user
      article.save(function (e, data, numberAffected) {
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
      self.articles.update(option, dataArr, { runValidators: true }, function (e, data) {
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
      self.articles.remove({
        _id: { $in: ids }
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

let article = new Article();
export { article };
