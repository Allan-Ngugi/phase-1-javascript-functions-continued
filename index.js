const saturdayFun = (Allan)=>{
    if(Allan === 'bathe my dog'){
        return 'This Saturday, I want to bathe my dog!'
    }
    return 'This Saturday, I want to roller-skate!' 
}
const mondayWork = (Allan) =>{
    if(Allan === 'work from home'){
        return 'This Monday, I will work from home.'
    }
    return 'This Monday, I will go to the office.'
}
const  wrapAdjective =  (closers)=> {
    return function (Allan = 'special') {
        return `You are ${closers}${Allan}${closers}!`
    }
}

