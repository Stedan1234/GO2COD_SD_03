#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

int userScore = 0;
int computerScore = 0;

string getComputerChoice() {
    string choices[3] = {"rock", "paper", "scissors"};
    int randomIndex = rand() % 3;
    return choices[randomIndex];
}

string determineWinner(string userChoice, string computerChoice) {
    if (userChoice == computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

void playGame() {
    while (true) {
        string userChoice;
        cout << "Enter rock, paper, or scissors (or 'quit' to exit): ";
        cin >> userChoice;

        if (userChoice == "quit") {
            cout << "Thanks for playing!\n";
            break;
        }

        string computerChoice = getComputerChoice();
        cout << "Computer chose: " << computerChoice << endl;

        string result = determineWinner(userChoice, computerChoice);
        cout << result << endl;

        cout << "Score - You: " << userScore << " | Computer: " << computerScore << "\n\n";
    }
}

int main() {
    srand(time(0));  // Seed the random number generator
    cout << "Welcome to Rock, Paper, Scissors!\n";
    playGame();
    return 0;
}
