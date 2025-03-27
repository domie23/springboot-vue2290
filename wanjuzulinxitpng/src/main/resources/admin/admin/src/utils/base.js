const base = {
    get() {
        return {
            url : "http://localhost:8080/wanjuzulinxitpng/",
            name: "wanjuzulinxitpng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wanjuzulinxitpng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "玩具租赁系统"
        } 
    }
}
export default base
