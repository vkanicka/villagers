const VILLAGER_BIRTHDAYS = [
   {name: 'Penny', url: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png', season: 'Fall', day: 'TU', date: 2, gift: 'Diamond'},
{name: 'Elliott', url: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png', season: 'Fall', day: 'F', date: 5, gift: 'Duck Feather'},
{name: 'Jodi', url: 'https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png', season: 'Fall', day: 'TH', date: 11, gift: 'Goat Cheese'},
{name: 'Abigail', url: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png', season: 'Fall', day: 'SA', date: 13, gift: 'Amethyst'},
{name: 'Sandy', url: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png', season: 'Fall', day: 'M', date: 15, gift: 'Daffodil'},
{name: 'Marnie', url: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png', season: 'Fall', day: 'TH', date: 18, gift: 'Diamond'},
{name: 'Robin', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png', season: 'Fall', day: 'SU', date: 21, gift: 'Goat Cheese'},
{name: 'George', url: 'https://stardewvalleywiki.com/mediawiki/images/7/78/George.png', season: 'Fall', day: 'W', date: 24, gift: 'Leek'},
{name: 'Kent', url: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png', season: 'Spring', day: 'TH', date: 4, gift: 'Roasted Hazelnuts'},
{name: 'Lewis', url: 'https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png', season: 'Spring', day: 'SU', date: 7, gift: 'Hot Pepper'},
{name: 'Vincent', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png', season: 'Spring', day: 'W', date: 10, gift: 'Pink Cake'},
{name: 'Haley', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png', season: 'Spring', day: 'SU', date: 14, gift: 'Pink Cake'},
{name: 'Pam', url: 'https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png', season: 'Spring', day: 'TH', date: 18, gift: 'Cactus Fruit'},
{name: 'Shane', url: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png', season: 'Spring', day: 'F', date: 20, gift: 'Hot Pepper'},
{name: 'Pierre', url: 'https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png', season: 'Spring', day: 'F', date: 26, gift: 'Fried Calamari'},
{name: 'Emily', url: 'https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png', season: 'Spring', day: 'SA', date: 27, gift: 'Amethyst'},
{name: 'Jas', url: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png', season: 'Summer', day: 'TH', date: 4, gift: 'Pink Cake'},
{name: 'Gus', url: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png', season: 'Summer', day: 'M', date: 8, gift: 'Diamond'},
{name: 'Maru', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png', season: 'Summer', day: 'W', date: 10, gift: 'Diamond'},
{name: 'Alex', url: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png', season: 'Summer', day: 'SA', date: 13, gift: 'Complete Breakfast'},
{name: 'Sam', url: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png', season: 'Summer', day: 'W', date: 17, gift: 'Cactus Fruit'},
{name: 'Demetrius', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png', season: 'Summer', day: 'F', date: 19, gift: 'Strawberry'},
{name: 'Dwarf', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png', season: 'Summer', day: 'M', date: 22, gift: 'Amethyst'},
{name: 'Willy', url: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png', season: 'Summer', day: 'W', date: 24, gift: 'Diamond'},
{name: 'Leo', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png', season: 'Summer', day: 'F', date: 26, gift: 'Duck Feather'},
{name: 'Krobus', url: 'https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png', season: 'Winter', day: 'M', date: 1, gift: 'Diamond'},
{name: 'Linus', url: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png', season: 'Winter', day: 'W', date: 3, gift: 'Cactus Fruit'},
{name: 'Caroline', url: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png', season: 'Winter', day: 'SU', date: 7, gift: 'Summer Spangle'},
{name: 'Sebastian', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png', season: 'Winter', day: 'W', date: 10, gift: 'Frozen Tear'},
{name: 'Harvey', url: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png', season: 'Winter', day: 'SU', date: 14, gift: 'Coffee'},
{name: 'Wizard', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png', season: 'Winter', day: 'W', date: 17, gift: 'Void Essence'},
{name: 'Evelyn', url: 'https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png', season: 'Winter', day: 'SA', date: 20, gift: 'Diamond'},
{name: 'Leah', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png', season: 'Winter', day: 'TU', date: 23, gift: 'Goat Cheese'},
{name: 'Clint', url: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png', season: 'Winter', day: 'F', date: 26, gift: 'Amethyst'},
    
]

export default VILLAGER_BIRTHDAYS;