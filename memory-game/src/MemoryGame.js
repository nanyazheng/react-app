import React, { Component } from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import './MemoryGame.css';

const CardState = {
  hiding: 0,
  showing: 1,
  matching: 2
}
class MemoryGame extends Component {
  constructor(props) {
    super(props);
    let cards = [
      { id: 0, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 1, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 2, cardState: CardState.hiding, backgroundColor: "green" },
      { id: 3, cardState: CardState.hiding, backgroundColor: "green" },
      { id: 4, cardState: CardState.hiding, backgroundColor: "blue" },
      { id: 5, cardState: CardState.hiding, backgroundColor: "blue" },
      { id: 6, cardState: CardState.hiding, backgroundColor: "orange" },
      { id: 7, cardState: CardState.hiding, backgroundColor: "orange" },
      { id: 8, cardState: CardState.hiding, backgroundColor: "yellow" },
      { id: 9, cardState: CardState.hiding, backgroundColor: "yellow" },
      { id: 10, cardState: CardState.hiding, backgroundColor: "purple" },
      { id: 11, cardState: CardState.hiding, backgroundColor: "purple" },
      { id: 12, cardState: CardState.hiding, backgroundColor: "pink" },
      { id: 13, cardState: CardState.hiding, backgroundColor: "pink" },
      { id: 14, cardState: CardState.hiding, backgroundColor: "black" },
      { id: 15, cardState: CardState.hiding, backgroundColor: "black" },
    ]
    cards = this.shuffle(cards);
    this.state = {
      cards
    };
    this.handleClick = this.handleClick.bind(this);
    this.onNewGame = this.onNewGame.bind(this);
  }
  shuffle(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
      let j = -1;
      while (j < i) {
        j = Math.floor(Math.random() * cards.length);
      }
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  }
  onNewGame() {
    let cards = this.state.cards.map(c => {
      return {
        ...c,
        cardState: CardState.hiding
      }
    });
    cards = this.shuffle(cards);
    console.log(cards);
    this.setState({cards});
  }
  handleClick(id) {
    // find it according to id of cardSelected and change the cardstate
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
      let obj = {};
      for (let key in c) {
        obj[key] = c[key];
      }
      for (let id of idsToChange) {
        if (obj.id === id) {
          obj.cardState = newCardState;
        }
      }
      return obj;
      })
    }
    let cards = mapCardState(this.state.cards, [id], CardState.showing);
    let showingCards = cards.filter(card => card.cardState === CardState.showing);
    let ids = showingCards.map(c => c.id);
    let hidingCards = null;
    if (showingCards.length === 2 && 
      showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(this.state.cards, ids, CardState.matching);
      console.log(cards);
    } else if (showingCards.length === 2) {
      hidingCards = mapCardState(this.state.cards, ids, CardState.hiding);
      this.setState({cards}, () => {
        setTimeout(() => {
          this.setState({cards: hidingCards})
        } , 2000)
      });
      return;
    }
    this.setState({cards});
  }

  render() {
    console.log(this.state.cards);
    const cards = this.state.cards.map((r, index) => (
      <Card key={r.id} card={r} onClick={() => this.handleClick(r.id)}/>
    ));
    return (
      <div className="App">
        <Navbar onNewGame={this.onNewGame}/>
        {cards}
      </div>
    )

  }

}

export default MemoryGame;
