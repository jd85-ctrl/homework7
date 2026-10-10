    const wrapper = document.querySelector('#pokemon-container');

    const pokemon = [
        {
            name: "Greninja",
            type: "Water",
            maxHp: 204,
            moves: ["Water Shuriken", "Aerial Ace", "Double Team"]
        },
        {
            name: "Infernape",
            type: "Fire",
            maxHp: 256,
            moves: ["Flame Wheel", "Fire Spin", "Mach Punch"]

        },
        {
            name: "Blaziken",
            type: "Fire",
            maxHp: 271,
            moves: ["Flame Charge", "Blaze Kick", "Flare Blitz"]


        },
        {
            name: "Lucario",
            type: "Steel",
            maxHp: "256",
            moves: ["Dragon Pulse", "Aerial Ace", "Aura Sphere"]

        }

    ];

    function renderPokemon(){
        wrapper.innerHTML = '';

        pokemon.forEach((item) => {
            const ele = document.createElement("div");
            const header = document.createElement("h1");
            const type = document.createElement("h3");
            const hp = document.createElement("p")
            const moves = document.createElement("p");


            header.innerHTML = item.name;
            type.innerHTML = "Type:" + item.type;
            hp.innerHTML = "Max Hp:" + item.maxHp;
            moves.innerHTML = "Moves: ";

            item.moves.forEach(move => {
                moves.innerHTML += move + ", ";
            });

            ele.classList.add("pokemon-Card");

            if (item.type === "Water") {
                ele.style.backgroundColor = "lightblue";
            }
            if (item.type === "Fire") {
                ele.style.backgroundColor = "red";
            }
            if (item.type === "Steel") {
                ele.style.backgroundColor = "grey";
            }

            ele.appendChild(header);
            ele.appendChild(type);
            ele.appendChild(hp);
            ele.appendChild(moves);

            wrapper.appendChild(ele);

        });

    }

    renderPokemon();




