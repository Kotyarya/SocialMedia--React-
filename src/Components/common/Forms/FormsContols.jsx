import style from "./FormsControls.module.css"

const Textarea = ({input, meta, ...props}) => {
  return (
      <div className={style.formControls + " " + style.error}>
          <textarea {...meta}  {...input} {...props}/>
          {
              meta.touched && !meta.valid
                  ? <span>Error</span>
                  : <></>
          }
      </div>
  )
}


export default Textarea