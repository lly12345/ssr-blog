export default function ({store,route,redirect}) {
    let token = store.state.token
    // 无登录就跳转到登陆页面
    if(!token){
        redirect('/login')
    }
    console.log("middleware: ",store.state);
}