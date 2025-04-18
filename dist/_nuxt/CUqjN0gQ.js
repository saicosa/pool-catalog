import{g as s,t as v,v as c,z as e,x as t,A as o,B as i,H as k,I as $,J as B,K as d,y as u,L as y}from"./8Mw9TU5e.js";import{_ as C}from"./DlAUqK2U.js";const I={},z={class:"empty-cart"};function F(g,n){const a=s("v-icon"),_=s("v-btn");return c(),v("div",z,[e(a,{size:"100",color:"grey-lighten-1"},{default:o(()=>n[0]||(n[0]=[i("mdi-cart-off")])),_:1}),n[2]||(n[2]=t("h2",{class:"text-h4 my-4"},"Ваша корзина пуста",-1)),e(_,{to:"/",color:"primary",size:"large","prepend-icon":"mdi-store"},{default:o(()=>n[1]||(n[1]=[i(" Перейти в каталог ")])),_:1})])}const N=C(I,[["render",F],["__scopeId","data-v-a7946674"]]),q={class:"d-flex align-center"},w={class:"d-flex align-center"},V={class:"mx-2"},D={class:"text-right"},E={class:"text-h5 mb-2"},L={__name:"fullState",setup(g){const n=k(),a=m=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0}).format(m),_=()=>{alert(`Заказ оформлен! Сумма: ${a(n.totalSum)}`),n.clearCart()};return(m,r)=>{const b=s("v-img"),f=s("v-icon"),p=s("v-btn"),h=s("v-table"),S=s("v-divider");return c(),v("div",null,[e(h,null,{default:o(()=>[r[3]||(r[3]=t("thead",null,[t("tr",null,[t("th",null,"Товар"),t("th",null,"Цена"),t("th",null,"Количество"),t("th",null,"Сумма"),t("th",null,"Действия")])],-1)),t("tbody",null,[(c(!0),v($,null,B(d(n).items,l=>(c(),v("tr",{key:l.id},[t("td",null,[t("div",q,[e(b,{src:l.image||"/images/placeholder.png",width:"60",height:"60",class:"mr-4"},null,8,["src"]),i(" "+u(l.title),1)])]),t("td",null,u(a(l.price)),1),t("td",null,[t("div",w,[e(p,{icon:"",variant:"text",onClick:x=>d(n).decreaseQuantity(l.id),disabled:l.quantity<=1},{default:o(()=>[e(f,null,{default:o(()=>r[0]||(r[0]=[i("mdi-minus")])),_:1})]),_:2},1032,["onClick","disabled"]),t("span",V,u(l.quantity),1),e(p,{icon:"",variant:"text",onClick:x=>d(n).increaseQuantity(l.id)},{default:o(()=>[e(f,null,{default:o(()=>r[1]||(r[1]=[i("mdi-plus")])),_:1})]),_:2},1032,["onClick"])])]),t("td",null,u(a(l.price*l.quantity)),1),t("td",null,[e(p,{icon:"",color:"error",onClick:x=>d(n).removeItem(l.id)},{default:o(()=>[e(f,null,{default:o(()=>r[2]||(r[2]=[i("mdi-delete")])),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1}),e(S,{class:"my-4"}),t("div",D,[t("div",E," Итого: "+u(a(d(n).totalSum)),1),e(p,{color:"primary",size:"large",onClick:_},{default:o(()=>r[4]||(r[4]=[i(" Оформить заказ ")])),_:1})])])}}},Q=C(L,[["__scopeId","data-v-5d89b409"]]),A={__name:"cart",setup(g){const n=k();return(a,_)=>{const m=s("v-container");return c(),y(m,null,{default:o(()=>[d(n).items.length===0?(c(),y(N,{key:0})):(c(),y(Q,{key:1}))]),_:1})}}};export{A as default};
