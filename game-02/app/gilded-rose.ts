export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}



export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const updatedItems = this.items.filter(item => item.quality > 0 && item.quality < 50).map(({ name, sellIn, quality }) => {
            const condition1 = name !== 'Aged Brie';
            const condition2 = name !== 'Backstage passes to a TAFKAL80ETC concert';
            const condition3 = name === 'Conjured';
            const condition4 = condition1 && condition2 && sellIn === 0;

            sellIn -= 1;

            if (condition1 && condition2) {
                quality -= 1;
            }
            if (!condition1) quality += 1;
            if (!condition2) {
                quality += 1;
                if (sellIn < 11) quality += 1;
                if (sellIn < 6) quality += 1;
            }
            if (condition3 || condition4) quality -= 2;
        })

        return updatedItems;
    }
}
