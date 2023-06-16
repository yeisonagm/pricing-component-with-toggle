export function Pricing({ title, price, storage, numberUsers, transfer }) {
    const nameCard = title.toLocaleLowerCase() + 'Card';

    return (
        <article className={`pricing-card ${nameCard}`}>
            <h2 className={title}>{title}</h2>
            <h1>{price}</h1>
            <div className="line"></div>
            <span>{storage}</span>
            <div className="line"></div>
            <span>{`${numberUsers} Users Allowed`}</span>
            <div className="line"></div>
            <span>{`Send up to ${transfer} GB`}</span>
            <div className="line"></div>

            <button className="pricing-button">
                <strong className="pricing-button-text">Learn More</strong>
            </button>
        </article>
    );
}
