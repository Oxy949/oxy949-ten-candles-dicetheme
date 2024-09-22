Hooks.once('diceSoNiceReady', dice3d => {
    dice3d.addSystem({
        id: "tencandles", name: "Ten Candles",
    }, "preferred");

    dice3d.addColorset({
        name: 'tencandles-base',
        category: 'Ten Candles',
        description: 'Ten Candles Base Die',
        foreground: '#fff',
        background: '#2c2c2c',
        outline: 'none',
        texture: 'none',
        material: 'metal',
        font: 'Kirsty, sans-serif',
    }, 'preferred');

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/1.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/2.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/3.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/4.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/5.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/d6/6.webp',
        ],
        system: 'tencandles',
        colorset: 'tencandles-base',
    });
    dice3d.addDicePreset({
        type: 'df',
        labels: [
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/1.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/2.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/3.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/4.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/5.webp',
            'modules/oxy949-ten-candles-dicetheme/assets/textures/df/6.webp',
        ],
        system: 'tencandles',
        colorset: 'tencandles-base',
    });
});
