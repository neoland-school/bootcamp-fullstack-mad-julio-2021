

function PrivateCount (){
return(
    <h1>Hello {sessionStorage.getItem('email')}</h1>
)
}

export default PrivateCount;