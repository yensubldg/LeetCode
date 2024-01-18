int numRabbits(vector<int>& answers) {
        unordered_map<int, int> table;
        int result = 0;
        for(auto const& ans: answers)
        {
            table[ans]++;
        }

        for(auto const& nOfGroup: table){
           int nInGroup = nOfGroup.first + 1;
            
            if(nOfGroup.first == 0){
                result+=nOfGroup.second;
            } else if(nInGroup >= nOfGroup.second){
                result+=nInGroup;
            }else {
                result+= ceil(nOfGroup.second * 1.0 / nInGroup * 1.0) * nInGroup;
            }
      }
      return result;
}
