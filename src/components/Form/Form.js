import React from 'react'
import { BiDownArrowCircle } from 'react-icons/bi'
import { useForm } from "react-hook-form"

import { postRequest } from '../../api//postRequest'
import TimerErrorLabel from './TimerErrorLabel'
import { nameVal, namePattern, numberVal, errorLabel, selectVal, specificWordPattern, errorStyles } from '../../Helpers/formValidate'
import SelectedInputs from '../SelectedInputs/SelectedInputs'
import "./Form.scss"

export const Form = () => {
    const { register, unregister, watch, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    })
    const watchFields = (name) => watch(name)
    const onSubmit = (data) => {
        postRequest(data)
    }
    return (
        <div className="form">
            <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
                <div className="content__left">
                    <div className="content__dishName">
                        <label htmlFor="dishName">Dish name*</label>
                        <input type="text" id="dishName" {...register("name", nameVal(true, 3, 12, namePattern))} />
                        {errorLabel(errors, "name")}
                    </div>
                    <div className="content__prepTime">
                        <label className="prepTime__label">
                            Preparation time*
                        </label>

                        <input
                            className="prepTime__hours"
                            style={errorStyles(errors, "prepTime__hours")}
                            type="number"
                            placeholder="h"
                            {...register("prepTime__hours", numberVal(true, 2, { pattern: /^([0-9]|[0-9][0-9])$/, maxNumber: 99 }))}
                        />

                        <span className="prepTime__divider">:</span>
                        <input
                            className="prepTime__minutes"
                            style={errorStyles(errors, "prepTime__minutes")}
                            type="number"
                            placeholder="min"
                            {...register("prepTime__minutes", numberVal(true, 2, { pattern: /^([0-9]|[0-5][0-9])$/, maxNumber: 59 }))}
                        />

                        <span className="prepTime__divider">:</span>
                        <input
                            className="prepTime__seconds"
                            style={errorStyles(errors, "prepTime__seconds")}
                            type="number"
                            placeholder="s"
                            {...register("prepTime__seconds", numberVal(true, 2, { pattern: /^([0-9]|[0-5][0-9])$/, maxNumber: 59 }))}
                        />
                        <TimerErrorLabel errors={errors} />
                    </div>
                </div>

                <div className="content__right">
                    <div className="content__dishType">
                        <label className="dishType__label">Select dish type*</label>
                        <div className="dishType__selectWrapper">
                            <select {...register("type", selectVal(specificWordPattern))}>
                                <option value="none">select dish type</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="sandwich">Sandwich</option>
                            </select>
                            <div className="selectWrapper__arrow">
                                <BiDownArrowCircle className="arrow__icon" />
                            </div>
                        </div>
                        {errorLabel(errors, "type")}
                    </div>
                    <div className="content__selectedInputs">
                        {watchFields("type") === "pizza" && (
                            <SelectedInputs
                                unregister={unregister}
                                names={["no_of_slices", "diameter"]}
                            >
                                <div className="inputWrapper__section">
                                    <label className="section__label" htmlFor="noOfSlices" >Number of slices*</label>
                                    <input type="number"  {...register("no_of_slices", numberVal(true, 2, { pattern: /^([1-9]|[0-1][0])$/, maxNumber: 10 }))} />
                                    {errorLabel(errors, "no_of_slices")}
                                </div>
                                <div className="inputWrapper__section">
                                    <label className="section__label" htmlFor="diameter" name="diameter">Diameter*</label>
                                    <input type="number"  {...register("diameter", numberVal(true, 2, { pattern: /^([2-3][0-9]|[4][0])$/, minNumber: 20, maxNumber: 40 }))} />
                                    {errorLabel(errors, "diameter")}
                                </div>
                            </SelectedInputs>
                        )}
                        {watchFields("type") === "soup" && (
                            <SelectedInputs
                                unregister={unregister}
                                names={["spiciness_scale"]}
                            >
                                <div className="inputWrapper__section">
                                    <label className="section__label">How spicy do you want?*</label>
                                    <input type="number"  {...register("spiciness_scale", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                                    {errorLabel(errors, "spiciness_scale")}

                                </div>
                            </SelectedInputs>
                        )}
                        {watchFields("type") === "sandwich" && (
                            <SelectedInputs
                                unregister={unregister}
                                names={["slices_of_bread"]}
                            >
                                <div className="inputWrapper__section">
                                    <label className="section__label">How many slices do you wish?*</label>
                                    <input type="number"  {...register("slices_of_bread", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                                    {errorLabel(errors, "slices_of_bread")}

                                </div>
                            </SelectedInputs>
                        )}
                    </div>
                </div>
                <div className="content__submit">
                    <input className="submit__btn" type="submit" value="Make an order!" />
                </div>
            </form>
        </div>
    )
}

export default Form
