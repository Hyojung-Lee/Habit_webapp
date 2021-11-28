import axios from "axios"

function generateQuest(quest) {
  return axios.post("/api/quest"
  ,{
      title: quest.id,
      term: quest.name,
      cycle:quest.cycle,
      startTime:quest.startTime,
      endTime:quest.endTime,
      days:quest.days,
      deadline:quest.deadline
    }
  )
}

function lookupQuest(){
  return axios.get("/api/quest");
}

function lookupQuestById(id){
  return axios.get("/api/quest/" + id);
}

function deleteQuest(id){
  return axios.delete("/api/quest/"+id);
}

export default {  
  generateQuest,
  lookupQuest,
  lookupQuestById,
  deleteQuest
}
