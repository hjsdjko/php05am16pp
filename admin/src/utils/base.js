const base = {
    get() {
        return {
            url : "http://localhost:8080/php05am16pp/",
            name: "php05am16pp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php05am16pp/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "门诊管理系统"
        } 
    }
}
export default base
