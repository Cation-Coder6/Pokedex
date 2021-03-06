import React, { Component } from 'react';
import Pokedex from './Pokedex';
class Pokemon extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randomIndex = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2[randomIndex]);
            hand2.splice(randomIndex, 1);
        }
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < hand1.length; i++) {
            sum1 += hand1[i].base_experience;
        }

        for (let i = 0; i < hand2.length; i++) {
            sum2 += hand2[i].base_experience;
        }
        let result1;
        let result2;
        if (sum1 > sum2) {
            result1 = "Winner";
            result2 = "Loser";
        }
        else {
            result1 = "Loser";
            result2 = "Winner";
        }
        return (
            <div>
                <Pokedex pokemon={hand1} result={result1} exp={sum1} />
                <Pokedex pokemon={hand2} result={result2} exp={sum2} />
            </div>
        )
    }
}
export default Pokemon;