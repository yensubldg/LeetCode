    bool isPalindrome(int x) {
        if(x < 0) return false;

        string tmp = to_string(x);

        int lenOfStr = tmp.length();

        for(int i = 0; i < lenOfStr/2; i++){
            if(tmp[i] != tmp[lenOfStr - 1 - i]) return false;
        }

        return true;
    }
