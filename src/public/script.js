$(()=>{
    let taskInp=$('#taskInp')
    let addBtn=$('#addBtn')
    let list=$('#list')
    
/////////////////////////////////////////get////////////////////////////////////////////////
    $.get('/todo',(data)=>{
        for(tasks of data){
            list.append(`<form action="/todo/delete" method="post">
            <div class="row">
                <div class="col-10"><li class="list-group-item task">${tasks.task}</li></div>
                <div class="col-2"><button type="submit" name="id" value="${tasks._id}" class="btn btn-primary" >Remove</button></div>
            </div>
        </form>`)
        }
    })
/////////////////////////////////////////post////////////////////////////////////////////////
    addBtn.click(()=>{
        let inpVal=taskInp.val()
        taskInp.val('')
        $.post('/todo',{
            task:inpVal
        },(data)=>{list.append(`<form action="/todo/delete" method="post">
        <div class="row">
            <div class="col-10"><li class="list-group-item task">${data.task}</li></div>
            <div class="col-2"><button type="submit" name="id" value="${data._id}" class="btn btn-primary " >Remove</button></div>
        </div>
    </form>`)})
        
    })
})