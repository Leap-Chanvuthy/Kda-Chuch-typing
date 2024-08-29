
# Kda-Chuch

KDA-Chuch is an engaging typing test application that combines accuracy, speed, and competitive challenges. With a sleek and customizable interface, users can track their performance, join a global community, and enhance their typing skills in a fun and interactive way.










### First Developemnt
This project firstly come from my university CAPSTONE PROJECT 1 which now is continue develope to improve a better user experience, performance including with some more typing features. 


#### Core Functionalities
- Simple, Customizable, Fast
- Good Lookign UI
- Real-Time Display
- Customizable Profile
- Variety of Word Modes
- Challenges and Test Modifiers
- Smooth Typing
- Account System
- Leaderboard
- Compete Typing Test with People.

### Project Installation
Follow these steps to set up KDA-Chuch on your local environment:

Prerequisites
- PHP 8.1 or higher
- Composer
- Laravel 8 or higher
- MySQL or Postgres
- XAMMP Server


1. Clone Project Repository
```
https://github.com/Leap-Chanvuthy/Kda-Chuch-typing.git

cd Kda-Chuch-typing
```
2. Install Dependencies
```
composer install
```

3. Copy .env 
```
cp .env.example .env
```

4. Setup Credential

```
DB_CONNECTION=mysql      // replace with your actual credential
DB_HOST=127.0.0.1        // replace with your actual credential
DB_PORT=3306             // replace with your actual credential
DB_DATABASE=typing-db    // replace with your actual credential
DB_USERNAME=root        // replace with your actual credential
DB_PASSWORD=           // replace with your actual credential

```

5. Migrate Database Tables
```
php artisan  migrate
```

6. Generate Application Key
```
php artisan key:generate
```

7. Install React Inertia Dependencies

```
npm install

```
8. Start Local Development Server

```
npm run dev 
```

```
php artisan serve
```

### Contribution

We welcome contributions from developers and enthusiasts around the world! Your involvement helps us improve and expand KDA-Chuch. To contribute:

Fork the Repository: Create a personal copy of the repository on GitHub.
Create a Branch: Develop your changes on a new branch. For example

#### Pull Request Guidelines
- Describe Your Changes: Provide a detailed explanation of what you have changed and why.
- Follow Coding Standards: Adhere to the project's coding style and conventions.
- Include Tests: Add or update tests as necessary to cover your changes.
- Update Documentation: Ensure that any relevant documentation is updated to reflect your changes.

