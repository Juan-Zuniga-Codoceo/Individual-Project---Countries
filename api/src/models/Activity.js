const { DataTypes } = require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define(
        "activity",
        {
            name : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            difficulty : {
                type: DataTypes.INTEGER,
                validate: {
                    min: 1,
                    max: 5,
                },
                allowNull: false,
            },
            duration : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            season: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                validate: {
                    isSeasons: (value) => {
                        if (
                            !value.every((season) =>
                            ["spring","summer","autumn","winter"].includes(season)
                            )
                        ) {
                            throw new Error("Invalid season");
                        }
                    },
                },
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};