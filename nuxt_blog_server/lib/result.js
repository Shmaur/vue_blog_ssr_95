// 返回的实体对象


class Result {
    constructor() {
        this.CODE = {
            SUCCESS: 200, //成功
            OTHER: 204, //其它状态
            FAILED: 400, //操作失败
            AUTHORITIES: 401, //身份验证失败
            NO_AUTHORITY: 403 //无权限
        }
        //返回提示
        this.MESSAGE = {
            SUCCESS: `请求成功`,
            FAILED: `操作失败!`,
            PARAMS_LACK: `参数不齐!`,
            AUTHORITIES: `登陆失效或身份过期!` //身份验证失败
        }
    }

    // 返回成功结果
    success(msg, data) {
        return {
            code: this.CODE.SUCCESS,
            data,
            massage: msg || this.MESSAGE.SUCCESS
        }
    }

    // 请求操作失败
    failed(msg, code, data) {
        return {
            code: code || this.CODE.FAILED,
            data,
            massage: msg || this.MESSAGE.FAILED
        };
    }

    // 缺少必要参数

    paramsLack(msg, code, data) {
        return {
            code: code || this.CODE.FAILED,
            data,
            massage: msg || this.MESSAGE.PARAMS_LACK
        };
    }

    // 身份证过期
    authorities(msg, code, data) {
        return {
            code: code || this.CODE.AUTHORITIES,
            data,
            massage: msg || this.MESSAGE.AUTHORITIES
        };
    }

    // 带分页的数据对象
    pageData(msg, code, data, currentPage, pageSize, totalCount, totalPage) {
        return {
            code: code || this.CODE.SUCCESS,
            data,
            currentPage,
            pageSize,
            totalCount,
            totalPage,
            massage: msg || this.MESSAGE.SUCCESS
        };
    }

    // 代码分页（非数据库分页)
    totalPageData(msg, code, data, page, limit) {
        let result = {
            code: code || this.CODE.SUCCESS,
            data: [],
            limit,
            page,
            total: 0,
            massage: msg || this.MESSAGE.SUCCESS
        };

        //分页
        if (data && limit && page) {
            if (data && data.length > 0) {
                //索引
                let index = (page - 1) * limit;
                for (let i = index; i < page * limit; i++) {
                    if (data[i]) result.data.push(data[i]);
                }
            }
            //总大小
            result.total = data.length;
        } else {
            result.data = data;
        }
        return result;
    }

}

module.exports = new Result()