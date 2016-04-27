// console.log(JSON.stringify(AJS.params, null, 4));

AJS.toInit(function(){
  var visibleElems =[
    '#space-menu-link',
    '#create-page-button',
    '#quick-create-page-button',
    '#brikit-toggle-header',
    '#help-menu-link',
    '.aui-header-logo.aui-header-logo-custom img'
  ];
  var visibleLength = visibleElems.length;
  for (var i = 0; i < visibleLength; i++) {
    AJS.$(visibleElems[i]).css("display", "none");
  }

  if (!AJS.params.cqIsAnonymous){
    console.log("is NOT anonymous");
    AJS.$('#header').css("display", "block");
  }

  if (AJS.params.cqIsAdmin || AJS.params.isConfluenceAdmin || AJS.params.isSpaceAdmin){
    console.log("is Admin");
    var hiddenElems = [
      '.ia-fixed-sidebar',
      '#brikit-edit-mode',
      '#action-page-permissions-link',
      '#action-export-pdf-link',
      '#brikit-designer-link',
      '#action-view-source-link',
      '#view-in-hierarchy-link',
      '#space-menu-link',
      '#brikit-toggle-header',
      '#help-menu-link',
      '#upm-requests-link'
    ];
    var hiddenLength = hiddenElems.length;
    for (var i = 0; i < hiddenLength; i++) {
      AJS.$(hiddenElems[i]).css("display", "block");
    }

    AJS.$('#create-page-button').css("display", "inline-block");
    AJS.$('#quick-create-page-button').css("display", "inline-block");
    console.log('changed css');
  } else {
    console.log("is NOT Admin");
  }
});

// window.onload = function(){
//   AJS.toInit(function(){
//       if (ThemePress.Edit.canEdit()){
//         ThemePress.Edit.toggleEditMode(true);
//         console.log("true");
//       }
//   });
// }
