const Deck = ({description}) => {
    return(
        <div class="flex flex-row items-start">
            <div class="w-full">{description}</div>
            <div class="">Edit</div>
        </div>
    )
};

export default Deck;
