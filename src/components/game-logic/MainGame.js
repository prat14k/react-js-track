import React, { useState, useEffect } from 'react';

import ActionButtons from './ActionButtons';
import MovesHistory from './MovesHistory';
import HealthMeter from './HealthMeter';
import { 
    PLAYER_ATTACK_MIN_PERCENTAGE, PLAYER_ATTACK_MAX_PERCENTAGE, 
    MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE, 
    SPECIAL_ATTACK_MIN_PERCENTAGE, SPECIAL_ATTACK_MAX_PERCENTAGE, 
    SPECIAL_ATTACK_MIN_HEALTH, PLAYER_HEAL_PERCENTAGE, 
    GAME_OVER_HEALTH, ATTACK_KEY, HEAL_KEY, PLAYER_KEY, ENEMY_KEY 
} from '../../constants';

function MainGame() {

    const gameState = {
        player: 100,
        enemy: 100
    };
    
    const gameMovesState = {
        movesLog: []
    };
      
    const getRandomNumber = ((min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    });

    const getPlayMoveMessage = ((playerKey, damage, actionType = ATTACK_KEY) => {
        if(actionType === HEAL_KEY) {
          return `Player heals for ${damage}`;
        }
        if(playerKey === PLAYER_KEY) {
          return `Player hits monster for ${damage}`;
        }
        return `Monster hits player for ${damage}`;
    });
    
    const [currentGameState, updateGameState] = useState(gameState);
    const [currentMovesState, updateMovesState] = useState(gameMovesState);
    
    const updatePlayerHealth = ((health, moveType = ATTACK_KEY) => {
        updateHealth(PLAYER_KEY, health, moveType);
        setMoveLogMessage(ENEMY_KEY, health, moveType);
    });
    
    useEffect(() => {
        isGameOver()
    }, [currentGameState.player, currentGameState.player]);
    
    const updateEnemyHealth = ((health) => {
        updateHealth(ENEMY_KEY, health);
        setMoveLogMessage(PLAYER_KEY, health);
    });
    
    const setMoveLogMessage = ((actionDoneBy, health, moveType) => {
        updateMovesState(({movesLog}) => (
          {
            movesLog: [
              ...movesLog,
              { message: getPlayMoveMessage(actionDoneBy, health, moveType) }
            ]
          })
        );
    });
    
    const updateHealth = ((attacker, health) => {
        updateGameState(
            (previousState) => {
                console.log("ANANN");
                console.log({
                    ...previousState,
                    [attacker]: previousState[attacker] + health
                });
                return {
                    ...previousState,
                    [attacker]: previousState[attacker] + health
                };
            }
        );
    });
    
    const onAttack = (() => {
        updateEnemyHealth(-getRandomNumber(PLAYER_ATTACK_MIN_PERCENTAGE, PLAYER_ATTACK_MAX_PERCENTAGE));
        updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
    });
    
    const isGameOver = (() => {
        if (currentGameState.player < GAME_OVER_HEALTH || currentGameState.enemy < GAME_OVER_HEALTH) {
          onGiveUp();
        }
    });
    
    const onSpecialAttack = (() => {
        if(currentGameState.player > SPECIAL_ATTACK_MIN_HEALTH) {
          updateEnemyHealth(-getRandomNumber(SPECIAL_ATTACK_MIN_PERCENTAGE, SPECIAL_ATTACK_MAX_PERCENTAGE, "special_attack"));
          updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
        } else {
          alert("You don't have sufficient health");
        }
    });
    
    const onHeal = (() => {
        updatePlayerHealth(PLAYER_HEAL_PERCENTAGE, HEAL_KEY);
        updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
    });
    
    const onGiveUp = (() => {
        alert("Game Over");
        updateGameState(gameState);
    });

    return (
        <div>
            <ActionButtons
                onAttack={onAttack}
                onGiveUp={onGiveUp}
                onSpecialAttack={onSpecialAttack}
                onHeal={onHeal}
            />
            <MovesHistory
                movesLog={currentMovesState.movesLog}
            />
            <HealthMeter 
                name="Player" 
                health={currentGameState.player} 
            />
            <HealthMeter
                name="Monster" 
                health={currentGameState.enemy} 
            />
        </div>
    )
}

export default MainGame