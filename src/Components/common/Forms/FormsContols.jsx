import style from "./FormsControls.module.css"

const FormControls = ({input, meta, Element, ...props}) => {

    const hasError = meta.touched && !meta.valid

    return (
        <div className={
            hasError
                ? style.formControls + " " + style.error
                : style.formControls
        }>
            <Element {...input} {...props}/>
            {
                hasError
                    ? <span>{meta.error}</span>
                    : <></>
            }
        </div>
    )
}

export const Formtextarea = (props) => {
    return <FormControls {...props} Element={"textarea"}/>
}


export const FormInput = (props) => {
    return <FormControls {...props} Element={"input"}/>
}