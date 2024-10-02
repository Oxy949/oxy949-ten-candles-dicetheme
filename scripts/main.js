Hooks.once('diceSoNiceReady', dice3d => {
    dice3d.addSystem({
        id: "tencandles", name: "Ten Candles - Player",
    }, "preferred");

    dice3d.addSystem({
        id: "tencandles-gm", name: "Ten Candles - GM",
    });

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
            '☠',
            '',
            '',
            '',
            '',
            '☀',
        ],
        system: 'tencandles'
    });

    dice3d.addDicePreset({
        type: 'df',
        labels: [
            '',
            '',
            '',
            '',
            '☀',
            '☀',
        ],
        system: 'tencandles'
    });

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            '',
            '',
            '',
            '',
            '',
            '☠',
        ],
        system: 'tencandles-gm'
    });
});
