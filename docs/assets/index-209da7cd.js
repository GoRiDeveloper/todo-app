(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const P=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let f;const A=new Uint8Array(16);function F(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(A)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function k(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const M=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:M};function O(e,t,c){if(E.randomUUID&&!t&&!e)return E.randomUUID();e=e||{};const i=e.random||(e.rng||F)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){c=c||0;for(let o=0;o<16;++o)t[c+o]=i[o];return t}return k(i)}class R{constructor(t){this.id=O(),this.description=t,this.done=!1,this.createdAt=new Date}}const u={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[],filter:u.All},N=()=>{L()},L=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=u.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(l))},U=(e=u.All)=>{switch(e){case u.All:return[...l.todos];case u.Completed:return l.todos.filter(t=>t.done);case u.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Opción ${e} no definida.`)}},D=e=>{if(!e)throw new Error("La descripción es requerida.");l.todos.push(new R(e)),g()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},q=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},H=()=>{l.todos=l.todos.filter(e=>!e.done),g()},_=(e=u.All)=>{l.filter=e,g()},V=()=>l.filter,d={FILTERS:u,initStore:N,loadStore:L,getTodo:U,addTodo:D,toggleTodo:x,deleteTodo:q,deleteCompleted:H,setFilter:_,getCurrentFilter:V},$=e=>{if(!e)throw new Error("El todo es obligatorio.");const{done:t,description:c,id:i}=e,o=`

        <div class="view">

            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${c}</label>
            <button class="destroy"></button>

        </div>
        <input class="edit" value="Create a TodoMVC template">

    `,r=document.createElement("li");return r.innerHTML=o,r.setAttribute("data-id",i),t&&r.classList.add("completed"),r};let h;const J=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error("El elemento no se encontro");h.innerHTML="",t.forEach(c=>{h.append($(c))})};let T;function j(e){if(T||(T=document.querySelector(e)),!T)throw new Error(`Elemento con el ID : ${e} no se encontró.`);T.innerHTML=d.getTodo(d.FILTERS.Pending).length}const m={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoItems:"#new-todo-input",TodoFilter:".filtro",PendingCount:"#pending-count"},y={All:"Todos",Completed:"Completados",Pending:"Pendientes"},K=e=>{const t=()=>{const n=d.getTodo(d.getCurrentFilter());J(m.TodoList,n),c()},c=()=>{j(m.PendingCount)};(()=>{const n=document.createElement("div");n.innerHTML=P,document.querySelector(e).append(n),t()})();const i=document.querySelector(m.NewTodoItems),o=document.querySelector(m.TodoList),r=document.querySelector(m.ClearCompleted),p=document.querySelectorAll(m.TodoFilter);function b(n){n.keyCode===13&&n.target.value.trim().length!==0&&(d.addTodo(n.target.value),t(),n.target.value="")}function w(n){const a=n.target.closest("[data-id]");d.toggleTodo(a.getAttribute("data-id")),t()}function S(n){const a=n.target.closest("[data-id]"),I=n.target.classList.contains("destroy");!a||!I||(d.deleteTodo(a.getAttribute("data-id")),t())}function v(){d.deleteCompleted(),t()}function C(n){switch(p.forEach(a=>a.classList.remove("selected")),n.target.classList.add("selected"),n.target.text){case y.All:d.setFilter(d.FILTERS.All);break;case y.Pending:d.setFilter(d.FILTERS.Pending);break;case y.Completed:d.setFilter(d.FILTERS.Completed);break}t()}i.addEventListener("keyup",n=>b(n)),o.addEventListener("click",n=>w(n)),o.addEventListener("click",n=>S(n)),r.addEventListener("click",()=>v()),p.forEach(n=>{n.addEventListener("click",a=>C(a))})};K("#app");
