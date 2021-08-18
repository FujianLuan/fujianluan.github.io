var json=[]
document.querySelectorAll('h1').forEach((item,index)=>{
	if(index){
		json.push({
            title:item.innerText,
            url:"",
            icon:"",
            children:getp(item)
        })
	}
})
function getp(h1) {
    var t=[]
    //HTMLColleation 不含foreEach， NodeList包含
    // h1.nextElementSibling.children.forEach((i,index)=>{
    //     t.push({
    //         title:item.innerText,
    //         url:item.href,
    //         icon:"",
    //     })
    // })
    ;[].forEach.call(h1.nextElementSibling.children,(item,index)=>{
        t.push({
            title:item.innerText,
            url:item.href,
            icon:"",
        })
        if(h1&&h1.nextElementSibling&&h1.nextElementSibling.nextElementSibling&&h1.nextElementSibling.nextElementSibling.nodeName&&h1.nextElementSibling.nextElementSibling.nodeName!=='H1'){
            // [].push.apply(t,getp(h1.nextElementSibling))
            t=t.concat(getp(h1.nextElementSibling))
        }
    })
    return t
}
console.log(JSON.stringify(json));