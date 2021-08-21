function answer(){
    
    r = document.getElementById("rval").value
    x = document.getElementById("xval").value

    return f(r,x)

}

function S(r,n) {
    if(n<1){
        return 0
    }
    if(n==1){
        return 1
    }
    return (Math.pow(r,n)-1)/(r-1)
}

function ceiling(n) {
    if(n>Math.floor(n) && n-Math.floor(n)<0.0000001){
        n = Math.floor(n)
    }
    else{
        n = Math.ceil(n)
    }

    return n
}

function f(r,x) {

    if(r==1){
        p = x-1
        q = p+2
        str = q.toString()
    }
    else{
        n = Math.log(x*(r-1)+1)/Math.log(r)

        n = ceiling(n)

        p = S(r,n-2)+ceiling((x-S(r,n-1))/r)

        q = S(r,n) + (x-S(r,n-1)-1)*r

        str = ""

        for(i=1;i<r;i++){
            k = q+i
            str = str + k.toString() + ", "
        }

        k++
        str = str + k.toString()
    }

    document.getElementById("from").innerHTML = "You will be nominated by Person No. " + p.toString()
    document.getElementById("to").innerHTML = "You will have to nominate Persons No. " + str
}