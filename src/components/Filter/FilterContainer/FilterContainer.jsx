
import Form from '../../Forms/Form/Form'
import InputBox from '../../Forms/InputBox/InputBox'


function FilterContainer({filterOptions, title, formClass, boxClass, inputClass, labelClass, 
    onChangeHandler, legendClass, fieldsetClass}){
    

    return (
        <Form title={title} formClass={formClass} fieldsetClass={fieldsetClass}
        legendClass={legendClass}>
            <InputBox type="select" labelText="Ver: " options={filterOptions} 
            boxClass={boxClass}
            inputClass={inputClass}
            labelClass={labelClass}
            onChangeHandler={onChangeHandler}/>
        </Form>
    )
}

export default FilterContainer;