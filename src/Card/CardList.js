import Card from "./Card"

const CardList = ({candidates, party}) => {

    const candidateList = candidates.map((c, i) => {
        return <Card key={i} id={c.id} name={c.name} website={c.website} 
                     img={c.img} party={c.party} />
    })

    return (
        <div class="cardlist">
            { candidateList }
        </div>
    )
}

export default CardList