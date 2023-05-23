public with sharing class opportunityController {
    public opportunityController() {

    }

    /* Método que  */
    @AuraEnabled(cacheable=true)
    public static Map<String, String> getStageFieldValue(){
        Map<String, String> picklistValues = new Map<String, String>();

        try {
            Schema.DescribeFieldResult stageField = Opportunity.StageName.getDescribe();
            List<Schema.PicklistEntry> stageFieldValues = stageField.getPicklistValues();

            for(Schema.PicklistEntry value : stageFieldValues){
                if (value.isActive()) {
                    picklistValues.put(value.getLabel(), value.getValue());
                }
            }
            return picklistValues;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}