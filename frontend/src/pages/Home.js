import Card from '../components/Card'

function Home() {
  return (
    <div className="Home">
        <h1>Welcome to a new experience!!!</h1>
        <Card cardId="1" title="Ice Skating" description="Ice skating club welcome event"/>
        <Card cardId="2" title="Break Dancing" description="WOW! FREE FOOD!!!"/>
        <Card cardId="3" title="Blindfold Skiing" description="Try not to die :)"/>
    </div>
  );
}

export default Home;