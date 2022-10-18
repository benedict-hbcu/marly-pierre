package org.example;



import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



public class Main {
    public static int TRIES = 6;
    public static final String ANSWER = Util.getRandomWord();
    public static int guessCount = 0;

    public static final String ANSI_RESET = "\u001B[0m";
    public static final String BACKGROUND_YELLOW = "\u001B[43m";
    public static final String BACKGROUND_GREEN = "\u001B[42m";


    public static void main(String[] args) throws InterruptedException {

        boolean continuePlaying = false;
        String computerWord = Util.getRandomWord();


        while (!continuePlaying) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Welcome to Wordle!");
            System.out.println("Type a five letter word to begin!");
            System.out.printf("Enter a word (attempt %d of %d): %n", guessCount, TRIES);
            String userGuess = scanner.nextLine();
            userGuess = userGuess.trim();
            boolean isGuess5Letters = (userGuess.length() == 5);
            while (!isGuess5Letters) {
                System.out.println("Must be 5 characters, try again!");
                userGuess = scanner.nextLine();
                userGuess = userGuess.trim();
                isGuess5Letters = (userGuess.length() == 5);
            }
            guessCount++;

            List<Integer> greenIndices = new ArrayList<>();
            List<Integer> possibleYellowUserIndices = new ArrayList<>();
            List<Integer> doNotCheckAgainComputerIndices = new ArrayList<>();
            List<Integer> yellowIndices = new ArrayList<>();

            for (int i = 0; i < 5; i++) {
                possibleYellowUserIndices.add(i);
            }

            for (int i = 0; i < userGuess.length(); i++) {
                char userLetter = userGuess.charAt(i);
                char computerLetter = computerWord.charAt(i);
                if (userLetter == computerLetter) {
                    greenIndices.add(i);
                    possibleYellowUserIndices.remove(Integer.valueOf(i));
                    doNotCheckAgainComputerIndices.add(i);
                }
            }

            for (int userIndex = 0; userIndex < userGuess.length(); userIndex++) {
                if (!possibleYellowUserIndices.contains(userIndex)) {
                    continue;
                }
                char userLetter = userGuess.charAt(userIndex);
                for (int computerIndex = 0; computerIndex < computerWord.length(); computerIndex++) {
                    if (doNotCheckAgainComputerIndices.contains(computerIndex)) {
                        continue;
                    }
                    char computerLetter = computerWord.charAt(computerIndex);
                    if (computerLetter == userLetter) {
                        yellowIndices.add(userIndex);
                        doNotCheckAgainComputerIndices.add(computerIndex);
                        break;
                    }
                }
            }

            for (int i = 0; i < userGuess.length(); i++) {
                char userLetter = userGuess.charAt(i);
                if (greenIndices.contains(i)) {
                    System.out.print(Util.getFormattedLetter(userLetter, Util.Result.HIT));
                } else if (yellowIndices.contains(i)) {
                    System.out.print(Util.getFormattedLetter(userLetter, Util.Result.SEMI_HIT));
                } else {
                    System.out.print(Util.getFormattedLetter(userLetter, Util.Result.MISS));
                }
                Thread.sleep(500);
            }

            System.out.println();


            if (userGuess.equals(computerWord)) {
                System.out.println("Congratulations!! You guessed the word :) ");
                continuePlaying = true;
            } else if (guessCount >= 6) {
                System.out.println("Sorry, you've ran out of attempts! The word was " +ANSWER);
                continuePlaying = true;
            }


        }
    }
}







