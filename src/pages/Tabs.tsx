import { ItsyTabs } from '@itsy-ui/navigation';
import "@itsy-ui/data/fields";
import { StateManagerContext } from "@itsy-ui/core";

const items = [
    {
        "name": "f8edd520-4963-241b-3dfd-67e7f077dac1",
        "title": "Ludo King",
        "content": {
            "ui:widget": "label",
            "title": "Ludo King™ is a classic board game played between friends and family. Play the Parchisi dice game of kings! Recall your childhood!Ludo King is a cross platform multiplayer game that supports Desktop, Android, iOS and Windows mobile platform at same time. This game also support offline mode, where player can play with Computer or, Local multiplayer (pass and play mode). Ludo King is also a favorite game of Bollywood superstars and Indian cricket stars. Play this dice game Ludo King. Best casual game in board games",
            "alignText": "center",
            "headerTag": "h8",
            "style": {
                "display": "flex",
            },
        },
    },
    {
        "name": "1dc86607-7def-3f25-63ff-e164f2bcb60f",
        "title": "Carrom Pool",
        "content": {
            "ui:widget": "label",
            "title": "Carrom Disc Pool is an easy-to-play multiplayer board game. Pot all your pieces before your opponent. Can you become the best at this Carrom Board game?With simple gameplay, smooth controls and great physics, travel around the world and play against worthy opponents. Are you up for the challenge?This game has multiple popular variants across the globe. Some to the most famous ones are Korona, Couronne, Bob, Crokinole, Pichenotte and Pitchnut.Customise your pieces with a huge variety of unlock-able items! Show off your style to players from all over the world!",
            "alignText": "center",
            "headerTag": "h8",
            "style": {
                "display": "flex",
            },
        },
    },
    {
        "name": "1dc86607-7def-3f25-63ff-e164f2zzb60f",
        "title": "Hunter Assassin",
        "content": {
            "ui:widget": "label",
            "title": "Control the assassin and hunt down your targets one by one. Use your surroundings and shadows to stay hidden from flashlights.Targets with automatic machine guns can be lurking around each corner. Attack them swiftly and escape without being spotted.Each eliminated target drops valuable gems. Use gems to unlock faster assassins.",
            "alignText": "center",
            "headerTag": "h8",
            "style": {
                "display": "flex",
            },
        },
    },
    {
        "name": "10c86607-7def-3f25-63ff-e164f2bcb60f",
        "title": "Free Fire",
        "content": {
            "ui:widget": "label",
            "title": "Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible. Drive vehicles to explore the vast map, hide in wild, or become invisible by proning under grass or rifts. Ambush, snipe, survive, there is only one goal: to survive and answer the call of duty.",
            "alignText": "center",
            "headerTag": "h8",
            "style": {
                "display": "flex",
            },
        },
    },
    {
        "name": "1dc86607-7def-3f25-93fc-e164f2zzb60f",
        "title": "PUBG Mobile",
        "content": {
            "ui:widget": "label",
            "title": "The official PLAYERUNKNOWN'S BATTLEGROUNDS designed exclusively for mobile. Play free anywhere, anytime. PUBG MOBILE delivers the most intense free-to-play multiplayer action on mobile. Drop in, gear up, and compete. Survive epic 100-player classic battles, payload mode and fast-paced 4v4 team deathmatch and zombie modes. Survival is key and the last one standing wins. When duty calls, fire at will!.FREE ON MOBILE - Powered by the Unreal Engine 4. Play console quality gaming on the go. Delivers jaw-dropping HD graphics and 3D sound. Featuring customizable mobile controls, training modes, and voice chat. Experience the most smooth control and realistic ballistics, weapon behavior on mobile",
            "alignText": "center",
            "headerTag": "h8",
            "style": {
                "display": "flex",
            },
        },
    }
]
const schema = {
    items: items,
}

const TapItem = () => {
    return (
        <StateManagerContext.Provider key="tabs">
            <ItsyTabs className="tab" schema={schema} />
        </StateManagerContext.Provider>
    );
};

export default TapItem;


