/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { BiDownArrowCircle, BiDish } from 'react-icons/bi'
import { useForm } from "react-hook-form"

import useAsyncFn from '../../api/useAsyncFn'
import convertRequestData from "../../api/convertRequestData"
import TimerErrorLabel from './TimerErrorLabel'
import { nameVal, namePattern, numberVal, errorLabel, selectVal, specificWordPattern, errorStyles } from '../../Helpers/formValidate'
import SelectedInputs from '../SelectedInputs/SelectedInputs'
import "./Form.scss"
import { FormContext } from '../../context/FormContextProvider'
import { useNavigate } from 'react-router'

export const Form = () => {
    const [{ error, resetInputs, setResetInputs }, postRequest] = useAsyncFn(null)
    const { isLoading, setTimeData } = useContext(FormContext)
    const navigate = useNavigate()
    const { register, unregister, watch, handleSubmit, formState: { errors, }, reset } = useForm({
        mode: "onBlur"
    })
    const watchFields = (name) => watch(name)


    useEffect(() => {
        error && alert(error)
    }, [error])
    useEffect(() => {
        if (resetInputs) {
            resetInputs && reset()
            setResetInputs(false)
            navigate("/home/result")
        }
    }, [resetInputs])

    const onSubmit = (data) => {
        const { prepTime__hours: h,
            prepTime__minutes: min,
            prepTime__seconds: sec } = data
        setTimeData({ h, min, sec })
        const newData = convertRequestData(data)
        postRequest(newData)
    }
    return (
        <>
            <div className="form">
                <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
                    <div className="content__left">
                        <div className="content__dishName">
                            <label htmlFor="dishName">Dish name*</label>
                            <input
                                type="text"
                                id="dishName"
                                disabled={isLoading}
                                {...register("name", nameVal(true, 3, 12, namePattern))} />
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
                                disabled={isLoading}
                                {...register("prepTime__hours", numberVal(true, 2, { pattern: /^([0-9]|[0-9][0-9])$/, maxNumber: 99 }))}
                            />

                            <span className="prepTime__divider">:</span>
                            <input
                                className="prepTime__minutes"
                                style={errorStyles(errors, "prepTime__minutes")}
                                type="number"
                                placeholder="min"
                                disabled={isLoading}
                                {...register("prepTime__minutes", numberVal(true, 2, { pattern: /^([0-9]|[0-5][0-9])$/, maxNumber: 59 }))}
                            />

                            <span className="prepTime__divider">:</span>
                            <input
                                className="prepTime__seconds"
                                style={errorStyles(errors, "prepTime__seconds")}
                                type="number"
                                placeholder="s"
                                disabled={isLoading}
                                {...register("prepTime__seconds", numberVal(true, 2, { pattern: /^([0-9]|[0-5][0-9])$/, maxNumber: 59 }))}
                            />
                            <TimerErrorLabel errors={errors} />
                        </div>
                    </div>

                    <div className="content__right">
                        <div className="content__dishType">
                            <label className="dishType__label">Select dish type*</label>
                            <div className="dishType__selectWrapper">
                                <select disabled={isLoading} {...register("type", selectVal(specificWordPattern))}>
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
                                        <input disabled={isLoading} type="number"  {...register("no_of_slices", numberVal(true, 2, { pattern: /^([1-9]|[0-1][0])$/, maxNumber: 10 }))} />
                                        {errorLabel(errors, "no_of_slices")}
                                    </div>
                                    <div className="inputWrapper__section">
                                        <label className="section__label" htmlFor="diameter" name="diameter">Diameter*</label>
                                        <input disabled={isLoading} type="number"  {...register("diameter", numberVal(true, 2, { pattern: /^([2-3][0-9]|[4][0])$/, minNumber: 20, maxNumber: 40 }))} />
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
                                        <input disabled={isLoading} type="number"  {...register("spiciness_scale", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
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
                                        <input disabled={isLoading} type="number"  {...register("slices_of_bread", numberVal(true, 1, 2, /\b([1-9]|10)\b/))} />
                                        {errorLabel(errors, "slices_of_bread")}

                                    </div>
                                </SelectedInputs>
                            )}
                        </div>
                    </div>
                    <div className="content__submit">
                        <LoadingButton
                            className="submit__btn"
                            type="submit"
                            loading={isLoading}
                            endIcon={<BiDish className="submit__icon" />}
                            loadingPosition="end"
                            variant="outlined"
                            sx={{ color: "rgb(20, 38, 128)", textTransform: "none" }}
                        >
                            Make an order!
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
