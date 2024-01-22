(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),c=(i(16),i(11)),s=i(2),r=(i(17),i(1)),l=(i(18),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=(i(20),function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})}),m=i(9),j=i(5),b=i(7),h=i(10),u=i.n(h);var g=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,j=e.onChange,b=void 0===j?function(){}:j,h=e.hasUrlError,g=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(g,1)[0],p=Object(r.useState)(!1),v=Object(s.a)(p,2),f=v[0],w=v[1],x=f&&m&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{name:t,type:"text",id:O,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":x||h}),placeholder:o,value:i,onChange:function(e){return b(e)},onBlur:function(){return w(!0)}})}),x&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),h&&i&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is incorrect")})]})},O=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,p=function(e){return!O.test(e)},v=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),d=Object(s.a)(o,2),m=d[0],h=d[1],u=m.title,O=m.description,v=m.imgUrl,f=m.imdbUrl,w=m.imdbId,x=!u.trim()||!v.trim()||!w.trim()||!f.trim(),M=Object(r.useState)(!1),N=Object(s.a)(M,2),U=N[0],I=N[1],y=Object(r.useState)(!1),T=Object(s.a)(y,2),B=T[0],_=T[1],k=function(e){var t=e.target,i=t.name,a=t.value;h((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},i,a))}))};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),B||U||(t(m),h({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),c((function(e){return e+1})))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(g,{name:"title",label:"Title",value:u,onChange:k,required:!0}),Object(l.jsx)(g,{name:"description",label:"Description",value:O,onChange:k}),Object(l.jsx)(g,{name:"imgUrl",label:"Image URL",value:v,onChange:k,required:!0,hasUrlError:U}),Object(l.jsx)(g,{name:"imdbUrl",label:"Imdb URL",value:f,onChange:k,required:!0,hasUrlError:B}),Object(l.jsx)(g,{name:"imdbId",label:"Imdb ID",value:w,onChange:k,required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:x,onClick:function(){_(p(f)),I(p(v))},children:"Add"})})})]},n)},f=function(){var e=Object(r.useState)(m),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.8ba3c277.chunk.js.map