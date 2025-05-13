import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199 ","899","278"];
    let Description=[
        ["8,000 DPI","5 programable buttons"],
        ["instutive surface","Designed for iPad Pro"],
        ["designed for iPad Pro","intutive surface"],
        ["wirelss","optical orientation"]
    ]
    return(
        <div className="Product">
            <h2>{title}</h2>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
};

export default Product;