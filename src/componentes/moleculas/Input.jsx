function Input({name,title,type,onchange,onBlur,className}){
    return(
        <div>
            <label className={className} htmlFor={name}>{title}</label><br />
            <input id={name} type={type} onChange={onchange} onBlur={onBlur}></input>
        </div>
    );
}
export default Input;