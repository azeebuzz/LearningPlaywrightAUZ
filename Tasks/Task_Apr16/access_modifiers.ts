export class Person {
    // 1. PUBLIC: Accessible anywhere
    public name: string = "Azeeb";

    // 2. PROTECTED: Accessible only inside Person and its child classes (subclasses)
    protected familySecret: string = "SecretPin123";

    // 3. PRIVATE: Accessible ONLY inside this Person class
    private diary: string = "Personal Diary";

    public readDiary(): void {
        // Allowed: 'diary' is private, but this method is inside the Person class
        console.log(this.diary);
    }
}