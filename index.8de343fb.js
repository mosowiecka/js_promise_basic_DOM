// write your code here
var e=document.getElementById("logo"),t=new Promise(function(t){e.addEventListener("click",function(){t("Promise was resolved!")})}),n=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)});t.then(function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.appendChild(e)}),n.catch(function(){var e=document.createElement("div");e.classList.add("message","error-message"),e.textContent="Promise was rejected!",document.body.appendChild(e)});//# sourceMappingURL=index.8de343fb.js.map

//# sourceMappingURL=index.8de343fb.js.map
