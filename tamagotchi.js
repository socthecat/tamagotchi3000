class Tamagotchi {
    constructor(hg, hp, name, ht, cl) {
        this.name = name;
        this.fullness = this.checkValue(hg);
        this.happiness = this.checkValue(hp);
        this.health = this.checkValue(ht);
        this.clean = this.checkValue(cl);
        this.alive = true;

        this.dieInterval = null;
        this.interval = null;
    }
    checkValue(a) {
        if (typeof a ==="number"){
            if (a > 0 && a <= 100) {
                return a;
            }
        }
        else{
            if (a < 0) {
                return 0;
            }
            else if (a > 100) {
                return 100;
            }
            else {
                console.log("zhest");
            }
        }
    }
    main(){
        this.interval = setInterval(() => {
            if(this.fullness < 15 || this.clean < 15 || this.happiness < 15) {
                if(!this.dieInterval) {
                    this.dieInterval = setInterval(() => {
                        console.log("Your pet is sick.")
                        this.checkValue(this.health -=2); 

                        if(this.health <= 0) {
                            this.alive = false;
                            console.log("Umer muzhik.")
                            clearInterval(this.interval)
                            clearInterval(this.dieInterval)
                        }
                    }, 500)
                }
            } else {
                if (this.dieInterval) {
                    clearInterval(this.dieInterval)
                    this.dieInterval = null
                }
            }
        }, 1000);
    }
    feed() {
        this.checkValue(this.fullness += 10);
        this.checkValue(this.happiness += 5);
        this.checkValue(this.clean -= 3);
    }
    play() {
        this.checkValue(this.happiness += 10);
        this.checkValue(this.clean -= 5);
        this.checkValue(this.fullness -= 5);
    }
    wash() {
        this.checkValue(this.clean += 10);
        this.checkValue(this.happiness -= 5);
        this.checkValue(this.fullness -= 3);
    }
    sleep(){
        this.checkValue(this.health += 10);
        this.checkValue(this.happiness += 10);
    }
}