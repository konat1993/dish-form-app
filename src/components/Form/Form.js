import React from 'react'
import { BiDownArrowCircle } from 'react-icons/bi'
import { useForm } from "react-hook-form"

import { nameVal, namePattern, numberVal, errorLabel, selectVal, specificWordPattern, errorStyles } from './formValidate'

import "./Form.scss"
export const Form = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    })
    const watchFields = (name) => watch(name)

    // const timeValue = () => {
    //     const hours = watchFields("prepTime__hours")
    //     const minutes = watchFields("prepTime__minutes")
    //     const seconds = watchFields("prepTime__seconds")

    //     return `${hours}:${minutes}:${seconds}`
    // }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="form">
            <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
                <div className="content__dishName">
                    <label htmlFor="dishName">Dish name*</label>
                    <input type="text" id="dishName" {...register("dishName", nameVal(true, 3, 12, namePattern))} />
                    {errorLabel(errors, "dishName")}
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
                        {...register("prepTime__hours", numberVal(true, 2, 2))}
                    />
                    {/* {errorLabel(errors, "prepTime__hours")} */}

                    <span className="prepTime__divider">:</span>
                    <input
                        className="prepTime__minutes"
                        style={errorStyles(errors, "prepTime__minutes")}
                        type="number"
                        placeholder="min"
                        {...register("prepTime__minutes", numberVal(true, 2, 2))}
                    />
                    {/* {errorLabel(errors, "prepTime__minutes")} */}

                    <span className="prepTime__divider">:</span>
                    <input
                        className="prepTime__seconds"
                        style={errorStyles(errors, "prepTime__seconds")}
                        type="number"
                        placeholder="s"
                        {...register("prepTime__seconds", numberVal(true, 2, 2))}
                    />
                    {/* <input type="hidden"  {...register("prepTime", numberVal(true, 2, 2))} /> */}
                    {/* {errorLabel(errors, "prepTime")} */}

                </div>

                <div className="content__dishType">
                    <label className="dishType__label">Select dish type*</label>
                    <div className="dishType__selectWrapper">
                        <select {...register("dishType", selectVal(specificWordPattern))}>
                            <option value="none">select dish type</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Soup">Soup</option>
                            <option value="Sandwich">Sandwich</option>
                        </select>
                        <div className="selectWrapper__arrow">
                            <BiDownArrowCircle className="arrow__icon" />
                        </div>
                    </div>
                    {errorLabel(errors, "dishType")}
                </div>
                <div className="content__selectedInputs">
                    {watchFields("dishType") === "Pizza" && (
                        <>
                            <div className="inputWrapper__section">
                                <label className="section__label" htmlFor="noOfSlices">Number of slices*</label>
                                <input type="number"  {...register("pizza.noOfSlices", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                                {errorLabel(errors, "pizza.noOfSlices")}
                            </div>
                            <div className="inputWrapper__section">
                                <label className="section__label" htmlFor="diameter">Diameter*</label>
                                <input type="number"  {...register("pizza.diameter", numberVal(true, 1, 2))} />
                                {errorLabel(errors, "pizza.diameter")}
                            </div>
                        </>
                    )}
                    {watchFields("dishType") === "Soup" && (
                        <div className="inputWrapper__section">
                            <label className="section__label">How spicy do you want?*</label>
                            <input type="number"  {...register("soup.spicinessScale", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                            {errorLabel(errors, "soup.spicinessScale")}

                        </div>
                    )}
                    {watchFields("dishType") === "Sandwich" && (
                        <div className="inputWrapper__section">
                            <label className="section__label">How many slices do you wish?*</label>
                            <input type="number"  {...register("sandwich.slicesOfBread", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                            {errorLabel(errors, "sandwich.slicesOfBread")}

                        </div>
                    )}
                </div>
                <div className="content__submit">
                    <input className="submit__btn" type="submit" value="Order" />
                </div>
            </form>
        </div>
    )
}

export default Form
