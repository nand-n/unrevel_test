'use clieint'

import { AtomicForm, AtomicLabel, AtomicSubtitle } from "@/components"

function createProdcutForm({
    createProduct,
    handleSubmit,
    inputErrors,
    createProductSubmit,
    createError

}:any) {
  return (
    <AtomicForm onSubmit={handleSubmit(createProductSubmit)}>
        <div className="form__intro">
            <AtomicSubtitle size="xl">Create Product</AtomicSubtitle>
            <AtomicSubtitle size="m" color="secondary">
                Create Prodcut by filling the form.
            </AtomicSubtitle>
            {createError&& 'data' in createError && (
                <p>
            {(createError as { data: { message: string } })?.data?.message}
                </p>
            )}
        </div>
        <div className="form__inputs-wrap">
            {/* Title of the product  */}
            <AtomicLabel htmlFor="productName">
                <AtomicSubtitle size="m">
                    Product Name
                </AtomicSubtitle>
            </AtomicLabel>
        </div>
    </AtomicForm>
    )
}

export default createProdcutForm