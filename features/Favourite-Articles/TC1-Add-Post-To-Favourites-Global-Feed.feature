Feature: TC1 - Adding blog post to favourites from Global Feed
  Scenario in which user adds blog post to favourites from the Main page of the BBlog

@BBase @Favourites

Scenario: Adding blog post to favourites from Global Feed
Given I log in as "user_favourites"
  And I switch to "Global Feed" tab
 When I add blog post "Qa Test" to favourites its counter should increase
  And I go to users profile page
  And I switch to "Favorited Articles" tab
 Then Favourites list contains
 | Qa Test |