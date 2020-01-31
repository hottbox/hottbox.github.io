Search.setIndex({docnames:["api/generated/hottbox.algorithms.classification.LSSTM","api/generated/hottbox.algorithms.classification.TelVAC","api/generated/hottbox.algorithms.classification.TelVI","api/generated/hottbox.algorithms.decomposition.CPD","api/generated/hottbox.algorithms.decomposition.HOOI","api/generated/hottbox.algorithms.decomposition.HOSVD","api/generated/hottbox.algorithms.decomposition.Parafac2","api/generated/hottbox.algorithms.decomposition.RandomisedCPD","api/generated/hottbox.algorithms.decomposition.TTSVD","api/generated/hottbox.algorithms.decomposition.fusion.CMTF","api/generated/hottbox.contrib.visualisation.BaseComponentPlot","api/generated/hottbox.contrib.visualisation.ComponentPlotCPD","api/generated/hottbox.contrib.visualisation.ComponentPlotTKD","api/generated/hottbox.contrib.visualisation.gen_test_data","api/generated/hottbox.contrib.visualisation.gen_test_tensor_cpd","api/generated/hottbox.core.Tensor","api/generated/hottbox.core.TensorCPD","api/generated/hottbox.core.TensorTKD","api/generated/hottbox.core.TensorTT","api/generated/hottbox.core.fold","api/generated/hottbox.core.hadamard","api/generated/hottbox.core.khatri_rao","api/generated/hottbox.core.kolda_fold","api/generated/hottbox.core.kolda_unfold","api/generated/hottbox.core.kronecker","api/generated/hottbox.core.mode_n_product","api/generated/hottbox.core.sampled_khatri_rao","api/generated/hottbox.core.unfold","api/generated/hottbox.datasets.make_clusters","api/generated/hottbox.errors.ModeError","api/generated/hottbox.errors.StateError","api/generated/hottbox.errors.TensorModeError","api/generated/hottbox.errors.TensorShapeError","api/generated/hottbox.errors.TensorStateError","api/generated/hottbox.errors.TensorTopologyError","api/generated/hottbox.metrics.mape","api/generated/hottbox.metrics.mse","api/generated/hottbox.metrics.residual_rel_error","api/generated/hottbox.metrics.rmse","api/generated/hottbox.pdtools.pd_to_tensor","api/generated/hottbox.pdtools.tensor_to_pd","api/generated/hottbox.rank.mlrank","api/generated/hottbox.rank.rankest","api/generated/hottbox.utils.generation.dense_tensor","api/generated/hottbox.utils.generation.hankel_matrix","api/generated/hottbox.utils.generation.quick_tensor","api/generated/hottbox.utils.generation.quick_tensorcpd","api/generated/hottbox.utils.generation.quick_tensortkd","api/generated/hottbox.utils.generation.quick_tensortt","api/generated/hottbox.utils.generation.residual_tensor","api/generated/hottbox.utils.generation.sparse_tensor","api/generated/hottbox.utils.generation.super_diag_tensor","api/generated/hottbox.utils.generation.super_diagonal_tensor","api/generated/hottbox.utils.generation.super_symmetric_tensor","api/generated/hottbox.utils.generation.toeplitz_matrix","api/generated/hottbox.utils.generation.toeplitz_tensor","api/generated/hottbox.utils.validation.is_super_symmetric","api/generated/hottbox.utils.validation.is_toeplitz_matrix","api/generated/hottbox.utils.validation.is_toeplitz_tensor","api/hottbox.algorithms","api/hottbox.contrib","api/hottbox.core","api/hottbox.datasets","api/hottbox.errors","api/hottbox.metrics","api/hottbox.pdtools","api/hottbox.rank","api/hottbox.utils","api/modules","authors","changelog","development_guide/before_pull_request","development_guide/general_guidelines_and_workflow","development_guide/git_branching_model","development_guide/how_to_contribute","development_guide/index","index","installation","tutorials"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/generated/hottbox.algorithms.classification.LSSTM.rst","api/generated/hottbox.algorithms.classification.TelVAC.rst","api/generated/hottbox.algorithms.classification.TelVI.rst","api/generated/hottbox.algorithms.decomposition.CPD.rst","api/generated/hottbox.algorithms.decomposition.HOOI.rst","api/generated/hottbox.algorithms.decomposition.HOSVD.rst","api/generated/hottbox.algorithms.decomposition.Parafac2.rst","api/generated/hottbox.algorithms.decomposition.RandomisedCPD.rst","api/generated/hottbox.algorithms.decomposition.TTSVD.rst","api/generated/hottbox.algorithms.decomposition.fusion.CMTF.rst","api/generated/hottbox.contrib.visualisation.BaseComponentPlot.rst","api/generated/hottbox.contrib.visualisation.ComponentPlotCPD.rst","api/generated/hottbox.contrib.visualisation.ComponentPlotTKD.rst","api/generated/hottbox.contrib.visualisation.gen_test_data.rst","api/generated/hottbox.contrib.visualisation.gen_test_tensor_cpd.rst","api/generated/hottbox.core.Tensor.rst","api/generated/hottbox.core.TensorCPD.rst","api/generated/hottbox.core.TensorTKD.rst","api/generated/hottbox.core.TensorTT.rst","api/generated/hottbox.core.fold.rst","api/generated/hottbox.core.hadamard.rst","api/generated/hottbox.core.khatri_rao.rst","api/generated/hottbox.core.kolda_fold.rst","api/generated/hottbox.core.kolda_unfold.rst","api/generated/hottbox.core.kronecker.rst","api/generated/hottbox.core.mode_n_product.rst","api/generated/hottbox.core.sampled_khatri_rao.rst","api/generated/hottbox.core.unfold.rst","api/generated/hottbox.datasets.make_clusters.rst","api/generated/hottbox.errors.ModeError.rst","api/generated/hottbox.errors.StateError.rst","api/generated/hottbox.errors.TensorModeError.rst","api/generated/hottbox.errors.TensorShapeError.rst","api/generated/hottbox.errors.TensorStateError.rst","api/generated/hottbox.errors.TensorTopologyError.rst","api/generated/hottbox.metrics.mape.rst","api/generated/hottbox.metrics.mse.rst","api/generated/hottbox.metrics.residual_rel_error.rst","api/generated/hottbox.metrics.rmse.rst","api/generated/hottbox.pdtools.pd_to_tensor.rst","api/generated/hottbox.pdtools.tensor_to_pd.rst","api/generated/hottbox.rank.mlrank.rst","api/generated/hottbox.rank.rankest.rst","api/generated/hottbox.utils.generation.dense_tensor.rst","api/generated/hottbox.utils.generation.hankel_matrix.rst","api/generated/hottbox.utils.generation.quick_tensor.rst","api/generated/hottbox.utils.generation.quick_tensorcpd.rst","api/generated/hottbox.utils.generation.quick_tensortkd.rst","api/generated/hottbox.utils.generation.quick_tensortt.rst","api/generated/hottbox.utils.generation.residual_tensor.rst","api/generated/hottbox.utils.generation.sparse_tensor.rst","api/generated/hottbox.utils.generation.super_diag_tensor.rst","api/generated/hottbox.utils.generation.super_diagonal_tensor.rst","api/generated/hottbox.utils.generation.super_symmetric_tensor.rst","api/generated/hottbox.utils.generation.toeplitz_matrix.rst","api/generated/hottbox.utils.generation.toeplitz_tensor.rst","api/generated/hottbox.utils.validation.is_super_symmetric.rst","api/generated/hottbox.utils.validation.is_toeplitz_matrix.rst","api/generated/hottbox.utils.validation.is_toeplitz_tensor.rst","api/hottbox.algorithms.rst","api/hottbox.contrib.rst","api/hottbox.core.rst","api/hottbox.datasets.rst","api/hottbox.errors.rst","api/hottbox.metrics.rst","api/hottbox.pdtools.rst","api/hottbox.rank.rst","api/hottbox.utils.rst","api/modules.rst","authors.rst","changelog.rst","development_guide/before_pull_request.rst","development_guide/general_guidelines_and_workflow.rst","development_guide/git_branching_model.rst","development_guide/how_to_contribute.rst","development_guide/index.rst","index.rst","installation.rst","tutorials.rst"],objects:{"hottbox.algorithms":{classification:[59,0,0,"-"],decomposition:[59,0,0,"-"]},"hottbox.algorithms.classification":{LSSTM:[0,1,1,""],TelVAC:[1,1,1,""],TelVI:[2,1,1,""]},"hottbox.algorithms.classification.LSSTM":{fit:[0,2,1,""],get_params:[0,2,1,""],predict:[0,2,1,""],predict_proba:[0,2,1,""],score:[0,2,1,""],set_params:[0,2,1,""]},"hottbox.algorithms.classification.TelVAC":{fit:[1,2,1,""],get_params_base_clf:[1,2,1,""],grid_search:[1,2,1,""],predict:[1,2,1,""],predict_proba:[1,2,1,""],score:[1,2,1,""],set_params_base_clf:[1,2,1,""]},"hottbox.algorithms.classification.TelVI":{fit:[2,2,1,""],get_params_base_clf:[2,2,1,""],grid_search:[2,2,1,""],predict:[2,2,1,""],predict_proba:[2,2,1,""],score:[2,2,1,""],set_params_base_clf:[2,2,1,""]},"hottbox.algorithms.decomposition":{CPD:[3,1,1,""],HOOI:[4,1,1,""],HOSVD:[5,1,1,""],Parafac2:[6,1,1,""],RandomisedCPD:[7,1,1,""],TTSVD:[8,1,1,""],fusion:[59,0,0,"-"]},"hottbox.algorithms.decomposition.CPD":{converged:[3,2,1,""],copy:[3,2,1,""],decompose:[3,2,1,""],name:[3,2,1,""]},"hottbox.algorithms.decomposition.HOOI":{converged:[4,2,1,""],copy:[4,2,1,""],decompose:[4,2,1,""],name:[4,2,1,""]},"hottbox.algorithms.decomposition.HOSVD":{copy:[5,2,1,""],decompose:[5,2,1,""],name:[5,2,1,""]},"hottbox.algorithms.decomposition.Parafac2":{converged:[6,2,1,""],copy:[6,2,1,""],decompose:[6,2,1,""],name:[6,2,1,""]},"hottbox.algorithms.decomposition.RandomisedCPD":{converged:[7,2,1,""],copy:[7,2,1,""],decompose:[7,2,1,""],name:[7,2,1,""]},"hottbox.algorithms.decomposition.TTSVD":{copy:[8,2,1,""],decompose:[8,2,1,""],name:[8,2,1,""]},"hottbox.algorithms.decomposition.fusion":{CMTF:[9,1,1,""]},"hottbox.algorithms.decomposition.fusion.CMTF":{converged:[9,2,1,""],copy:[9,2,1,""],decompose:[9,2,1,""],name:[9,2,1,""]},"hottbox.contrib":{visualisation:[60,0,0,"-"]},"hottbox.contrib.visualisation":{BaseComponentPlot:[10,1,1,""],ComponentPlotCPD:[11,1,1,""],ComponentPlotTKD:[12,1,1,""],gen_test_data:[13,3,1,""],gen_test_tensor_cpd:[14,3,1,""]},"hottbox.contrib.visualisation.BaseComponentPlot":{extend_available_plots:[10,2,1,""]},"hottbox.core":{Tensor:[15,1,1,""],TensorCPD:[16,1,1,""],TensorTKD:[17,1,1,""],TensorTT:[18,1,1,""],fold:[19,3,1,""],hadamard:[20,3,1,""],khatri_rao:[21,3,1,""],kolda_fold:[22,3,1,""],kolda_unfold:[23,3,1,""],kronecker:[24,3,1,""],mode_n_product:[25,3,1,""],operations:[61,0,0,"-"],sampled_khatri_rao:[26,3,1,""],structures:[61,0,0,"-"],unfold:[27,3,1,""]},"hottbox.core.Tensor":{access:[15,2,1,""],copy:[15,2,1,""],copy_modes:[15,2,1,""],data:[15,2,1,""],describe:[15,2,1,""],fold:[15,2,1,""],frob_norm:[15,2,1,""],ft_shape:[15,2,1,""],in_normal_state:[15,2,1,""],mode_n_product:[15,2,1,""],mode_names:[15,2,1,""],modes:[15,2,1,""],order:[15,2,1,""],reset_meta:[15,2,1,""],reset_mode_index:[15,2,1,""],reset_mode_name:[15,2,1,""],set_mode_index:[15,2,1,""],set_mode_names:[15,2,1,""],shape:[15,2,1,""],show_state:[15,2,1,""],size:[15,2,1,""],unfold:[15,2,1,""],vectorise:[15,2,1,""],write_subtensor:[15,2,1,""]},"hottbox.core.TensorCPD":{copy:[16,2,1,""],copy_modes:[16,2,1,""],core:[16,2,1,""],fmat:[16,2,1,""],ft_shape:[16,2,1,""],mode_names:[16,2,1,""],modes:[16,2,1,""],order:[16,2,1,""],rank:[16,2,1,""],reconstruct:[16,2,1,""],reset_mode_index:[16,2,1,""],reset_mode_name:[16,2,1,""],set_mode_index:[16,2,1,""],set_mode_names:[16,2,1,""]},"hottbox.core.TensorTKD":{copy:[17,2,1,""],copy_modes:[17,2,1,""],core:[17,2,1,""],fmat:[17,2,1,""],ft_shape:[17,2,1,""],mode_names:[17,2,1,""],modes:[17,2,1,""],order:[17,2,1,""],rank:[17,2,1,""],reconstruct:[17,2,1,""],reset_mode_index:[17,2,1,""],reset_mode_name:[17,2,1,""],set_mode_index:[17,2,1,""],set_mode_names:[17,2,1,""]},"hottbox.core.TensorTT":{copy:[18,2,1,""],copy_modes:[18,2,1,""],core:[18,2,1,""],cores:[18,2,1,""],ft_shape:[18,2,1,""],mode_names:[18,2,1,""],modes:[18,2,1,""],order:[18,2,1,""],rank:[18,2,1,""],reconstruct:[18,2,1,""],reset_mode_index:[18,2,1,""],reset_mode_name:[18,2,1,""],set_mode_index:[18,2,1,""],set_mode_names:[18,2,1,""]},"hottbox.datasets":{make_clusters:[28,3,1,""]},"hottbox.errors":{ModeError:[29,1,1,""],StateError:[30,1,1,""],TensorModeError:[31,1,1,""],TensorShapeError:[32,1,1,""],TensorStateError:[33,1,1,""],TensorTopologyError:[34,1,1,""]},"hottbox.metrics":{mape:[35,3,1,""],mse:[36,3,1,""],residual_rel_error:[37,3,1,""],rmse:[38,3,1,""]},"hottbox.pdtools":{pd_to_tensor:[39,3,1,""],tensor_to_pd:[40,3,1,""]},"hottbox.rank":{mlrank:[41,3,1,""],rankest:[42,3,1,""]},"hottbox.utils":{generation:[67,0,0,"-"],validation:[67,0,0,"-"]},"hottbox.utils.generation":{dense_tensor:[43,3,1,""],hankel_matrix:[44,3,1,""],quick_tensor:[45,3,1,""],quick_tensorcpd:[46,3,1,""],quick_tensortkd:[47,3,1,""],quick_tensortt:[48,3,1,""],residual_tensor:[49,3,1,""],sparse_tensor:[50,3,1,""],super_diag_tensor:[51,3,1,""],super_diagonal_tensor:[52,3,1,""],super_symmetric_tensor:[53,3,1,""],toeplitz_matrix:[54,3,1,""],toeplitz_tensor:[55,3,1,""]},"hottbox.utils.validation":{is_super_symmetric:[56,3,1,""],is_toeplitz_matrix:[57,3,1,""],is_toeplitz_tensor:[58,3,1,""]},hottbox:{contrib:[60,0,0,"-"],datasets:[62,0,0,"-"],errors:[63,0,0,"-"],metrics:[64,0,0,"-"],pdtools:[65,0,0,"-"],rank:[66,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"17m1112303":[7,26],"1_mode":15,"850mb":71,"boolean":[56,57,58],"case":74,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,29,30,31,32,33,34,43,50,52,61,70,71,72,78],"default":[1,2,3,4,5,7,8,15,16,17,18,20,21,24,26,40,51],"final":74,"float":[0,3,4,6,7,9,15,28,35,36,37,38,42,50,55],"function":[10,45,46,47,48,55,61,64,65,68,70,71,76,78],"import":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"int":[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,42,43,50,55],"long":[8,25],"new":[3,4,5,6,7,8,9,10,15,16,17,18,70,71,73,74,77],"return":[0,1,2,3,4,5,6,7,8,9,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,56,57,58],"super":[16,51,52,56],"switch":73,"true":[0,1,2,3,4,5,6,7,9,15,20,21,24,26,39,55],"try":[1,2,76],ALS:[3,6,7,9,70],But:[3,6,7],For:[42,70,71,74],Not:76,That:25,The:[1,2,4,5,9,15,16,17,18,20,21,24,25,26,28,55,60,70,73,74,77],There:[11,12,77],These:70,Use:15,Used:73,Will:[19,22],With:[16,17,46,47],__add__:70,__eq__:70,__repr__:70,__str__:70,__yourgithublogin__:74,_core_valu:[16,17,18],_data:15,_fmat:[16,17],_mode:[15,16,17,18,70],_mode_nam:70,_normal_shap:15,_state:[15,70],abl:77,about:[3,4,5,7,8,15,16,17,18,70],abov:74,absolut:35,acar:9,acc:[0,1,2],accept:60,access:[15,70],accord:[0,1,2,28,43,50,52,53],accordingli:[43,50],account:74,accuraci:[0,1,2],across:[52,63],act:73,activ:[70,77],add:[10,73,74],adding:10,addit:[60,71,74],addition:77,adher:[70,72],advic:[75,76],advis:[71,74,75,77],after:[2,15,71,73],ahmad:[2,69],algebra:[61,70,78],algorithm:[0,1,2,3,4,5,6,7,8,9,16,17,18,62,64,68,70,76],all:[1,2,4,5,10,12,15,16,17,18,20,26,46,47,60,63,70,71,73,74],allow:[10,31,32,33,77],almost:[73,74],alon:15,along:[15,19,22,23,25,27,55],alreadi:10,also:[10,15,70,71,72,77],altern:[3,6,7,9,77],alwai:[10,73,74],am5113:69,amend:72,analog:70,analysi:[7,26,76],ander:9,andrzej:0,ani:[3,6,7,9,28,43,50,52,71,75],anoth:13,anywai:10,apach:76,apart:8,api:[2,60,70,75,76,78],appear:[1,2],appli:[9,15,43,50,70],applic:[0,7,26],appreci:75,appropri:70,approxim:[3,4,6,7,9,37,42,68],appveyor:70,arang:[15,16,39,40,45,46,47,48],arrai:[15,16,19,22,23,25,27,51,52,57,66,68,70,78],as_matrix:70,ascend:[4,5],assign:[1,2,15,70],attempt:[29,30,31,32,33],attribut:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,70],auto:70,autogener:71,avail:[3,4,7,10,70,74,77],available_plot:10,axi:15,back:73,background:78,ballard:[7,26],base:[1,2,45,46,47,48,70,74],base_clf:[1,2],basetensortd:[1,2],basic:[15,74],battaglino:[7,26],been:[2,10,60,70,71,73],befor:[19,22,75,76],being:15,belong:25,berg:6,best:[1,2],best_param:[1,2],better:70,between:11,bias_:0,bias_history_:0,binari:0,bioinformat:9,blob:28,bmc:9,bool:[0,1,2,3,4,5,6,7,8,9,13,15,20,21,24,26,28,39,42,55],both:15,bound:28,branch:[71,74,75,77],bring:74,bro:[6,9],broken:75,browser:71,bruno:69,bs1912:69,bug:[72,73,75],build:[71,74],built:71,button:[70,74],byungsoo:9,calcul:41,call:[0,2,15,70],callabl:10,calvi:69,can:[10,15,28,70,71,72,74,75,77],canon:[3,7,70],caution:15,center:28,center_bound:28,centroid:28,certainli:60,chain:15,chang:[10,15,16,17,18,71,73,74,77],changelog:[76,77],channel:75,characteris:70,chat:75,check:[2,3,4,6,7,9,15,56,57,58,71,78],checkout:[73,74],chemometr:6,child:73,chosen:[10,77],cichocki:0,circul:55,classes_:[1,2],classif:[0,1,2,68,70,76],classifi:[1,2],clean:71,click:74,clipboard:70,clone:[74,77],cluster:28,cmtf:70,code:[70,73,74,75,77],coeffici:16,col_nam:40,collect:2,column:[1,2,21,25,26,39,40,46,47],com:[69,70,74,77],come:[71,75],command:74,commit:[73,74],common:15,compar:8,comparison:[1,2,70],compat:70,complet:71,compon:[9,13,16,17,46,47,48],comput:[0,1,2,3,6,7,8,9,15,41,64,70,74],concis:74,conda:71,conf:9,confer:2,consecut:[4,5],consid:73,consist:[15,39,42,45,46,47,48],construct:70,constructor:[10,11,12,70],contain:[1,2,3,6,7,9,10,15,16,17,18,51,59,65,71,74],content:76,context:10,contrib:[10,11,12,13,14],contribut:[75,76,77],control:74,convent:[15,25,72],convention:74,converg:[3,4,5,6,7,8,9],convers:[40,68],convert:[16,17,18,70],copi:[3,4,5,6,7,8,9,15,16,17,18,70,74],copy_mod:[15,16,17,18],core:[15,16,17,18,19,20,21,22,23,24,25,26,27,40,48,60,68,70,76],core_0:18,core_1:18,core_2:18,core_list:18,core_tensor:[16,17,18],core_valu:[13,16,17,18],correctli:60,correspond:[1,2,4,10,15,16,17,18,46,47,70,71,74],cost:[3,4,6,7,9],could:[10,15,71],counterpart:34,coupl:[9,70],cov:[71,77],cover:71,coverag:71,coveral:70,cpd:[6,7,9,16,70],creat:[15,16,17,18,70,71,72,73,74],creation:[45,46,47,48,70],credit:61,criterion:0,critic:[72,73],cross:[1,2],crucial:71,current:[15,32,33,70,73,77],custom:[10,15,16,17,18,68,70,76],custom_plot:10,custom_st:15,cv_param:[1,2],dai:[15,16,17,18,39,40],danilo:2,dashboard:[10,11,12],data:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,39,40,41,42,45,62,68,70,76],datafram:[39,40,70],dataset:[28,50,68,76],date:75,deal:71,decid:74,decomp_to_arrai:[1,2],decompos:[3,4,5,6,7,8,9,70],decomposit:[2,3,4,5,6,7,8,9,16,17,18,26,68,70,76,78],decomposition_nam:[3,4,5,6,7,8,9],dee:69,def:10,defin:[10,15,16,17,18,51,52,53,55,64,70],deliv:73,dens:43,depend:[15,25,60],dependeci:71,deploy:70,deprec:70,describ:[15,16,17,46,47,70,72],descript:[15,16,17,18,70,74],design:60,desir:[3,4,5,6,7,8,9,45,46,47,48,51,70,73],despit:10,detail:[71,72,74],determin:[1,2,70],dev:71,develop:[71,72,76,77],deviat:28,diagon:[16,51,52],dict:[0,1,2,10,15,16,17,18],dictionari:[0,1,2,10,15,16,17,18],differ:[11,61,70],differenti:13,dim:28,dimens:[3,6,7,9,15,28,43,50,51,52,53],dimension:[0,3,7,9,15,19,22,23,25,27,34,42,68,70,76,78],direct:[6,70],directli:[6,75],directori:[71,74,77],discoveri:9,discuss:74,disk:74,displai:10,distant:73,distr:[43,50,52],distr_typ:[43,50],divyansh:69,dm2515:69,doc:[70,71,74],docker:75,docstr:71,doctoc:70,document:[70,72,73,74,75],doe:[2,15,25],doesn:8,doi:[7,26],don:73,done:[73,74],down:[0,2,74],drop:[15,16,17,18,74],dropdown:10,due:[11,12,70],duplic:[3,6,7],dure:[70,71],each:[0,1,2,3,4,6,7,9,10,12,15,21,26,28,70,72,74],easi:[8,13],easier:70,ecosystem:78,eda:60,edit:[71,74,77],editor:71,effici:78,either:10,element:[1,2,15,39,45,46,47,48],elsewher:52,emploi:[1,2],empti:[4,5],enabl:[0,2,3,4,5,6,7,9,42],eng:9,ensembl:[2,70],ensur:71,environ:70,epsilon:[3,4,6,7,9,42],equal:[2,25,51,53],equival:15,error:[0,3,4,6,7,9,29,30,31,32,33,34,35,36,37,38,42,68,71],estim:[0,2,42,68,70],eta_history_:0,etc:[15,43,50,60],evangelo:9,everi:[20,55],evrim:9,exactli:8,exampl:[15,16,17,18,39,40,45,46,47,48,70,71],exce:18,except:[2,68,70,76],execut:[71,74,77],exist:[72,73],expect:[55,71],experiment:[68,76],expos:15,extend_available_plot:10,extens:74,extra:71,extract:[70,76],factor:[2,3,4,5,6,7,9,10,11,12,13,16,17,18,46,47,70],factor_mat:3,factor_matric:[16,17],factoris:[1,2,9],fals:[0,2,3,4,5,6,7,8,9,13,15,20,21,24,28,39,40,42,55],favour:70,featur:[16,17,46,47,68,71,72,74,75,76,77],feb:[39,40],feel:75,fetch:74,fiber:[43,50],file:[70,71,77],fill:[43,50],finalis:60,find:[75,77],finish:71,first:[4,10,70,71,77],fit:[0,1,2,6],fix:[43,50,60,72,73],flexibl:15,float64:0,fmat:[13,16,17],fmat_:6,fmat_a:9,fmat_b:9,fmat_u:6,fmat_v:6,fold:[15,22,25,70],follow:[15,72,74,77],forget:73,fork:74,form:[11,12,15,16,17,18,46,47,48,70],format:[15,16,17,18,48,70],formul:15,fortran:8,found:[71,72,74,77],foundat:0,frame:40,framework:70,free:75,frob_norm:15,frobeni:15,from:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,70,71,73,74,77],from_dict:39,ft_shape:[15,16,17,18,70],full:[16,17,18,48],full_shap:[16,17,18,46,47,48],fundament:[70,78],fusion:[9,68],futur:[0,19,22,70,73],fxdind:[43,50],gaussian:28,gave:[1,2],gener:[13,14,15,28,43,44,45,46,47,48,49,50,51,52,53,54,55,62,68,70,71,73,75,76],generalis:[19,22],get:[0,1,2,10,15,75],get_param:0,get_params_base_clf:[1,2],ggc115:69,git:[74,75,77],github:[70,74,75,77],gitter:75,giusepp:69,give:76,given:[0,1,2,3,4,5,6,7,8,9,16,17,18],global:[2,43,50],globalsip:2,gmail:69,going:10,good:74,gozd:9,greater:[3,6,7,9],grid_search:[1,2],grid_search_base_clf:2,guarante:60,guid:[74,76,77],guidelin:[71,75,76],gurdeniz:9,guzzl:70,guzzle_sphinx_them:[70,71],had:73,hard:0,has:[3,6,7,56,57,58,60],have:[2,3,4,5,7,8,10,15,16,17,18,21,26,70,71,73,75,77],head:73,help:71,here1:71,here2:71,here:[71,72,75],heterogen:2,hide:70,higher:[4,5],hold:[1,2],hooi:70,hosvd:[4,70],hotfix:72,hottbox:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,62,63,64,71,74,75],how:[3,6,7,10,75,76],howev:[2,73],html:71,http:[7,26,70,74,77],hyper:[1,2],icd:9,ident:[4,5],ieee:2,ies:71,ignor:[3,55],ik1614:69,ilia:2,ilya:69,ilyakisil:69,imag:[3,6,7,71],immedi:73,implement:[8,15,70,73],improv:75,in_normal_st:[15,40],inah:9,includ:[15,63,64,72,73],inconsist:[15,16,17,18],incorrect:[29,30,70],ind:15,independ:2,index:[10,15,16,17,18,20,21,24,26,39,40,70,71,76],indic:[3,4,5,7,8,15,16,17,18,26,43,50,56,57,58,70],info:15,inform:[2,3,4,5,7,8,15,16,17,18,40,70,78],init:[3,4,7,15],initi:[3,75],initialis:[3,4,6,7,9],inplac:[1,2,15,39],input:[53,55,56,57,58,70],insid:[2,71,77],instal:[60,71,74,76],instanc:[9,70],instead:[70,73],instruct:[74,75,77],integr:[68,76,78],interact:[10,11,12],intern:10,interpret:15,introduct:71,intslid:10,isn:75,isotrop:28,issu:75,iter:[0,3,4,6,7,9],its:[15,18,31,32,33,39,45,46,47,48,51,52,53,60,70,73,78],itself:[15,16,17,18],jan:[39,40],jean:61,jeon:9,job:[1,2],journal:[6,7,26],jupyt:60,kang:9,keep:[3,4,5,7,8,16,17,18,39,70],keep_index:39,keep_mata:70,keep_meta:[3,4,5,7,8,16,17,18,70],kei:[1,2,10,15,16,17,18,72,73],khatri:[3,6,7,21,26],kier:6,kisil:[2,69],kolda:[7,26,70],kolda_unfold:22,kossaifi:61,kr_revers:[3,7],kruskal:[3,6,7,9,11,16,42,46,70],kryskal:[16,51],kwarg:[1,2],lab:60,label:[0,1,2,40],larg:0,last:[15,70,73],latent:[16,17,46,47],latest:[73,74,77],lawaetz:9,learn:[0,2,70,72],least:[0,3,6,7,9,70],lee:9,len:[51,52,53],length:[1,2,47,51],level:39,librari:[71,72],licens:76,like:[10,73,74],limit:0,linear:[17,41,47,68,70,76,78],link:74,list:[0,1,2,3,4,6,7,9,10,13,15,16,17,18,20,21,24,26,28,42,52,55,70,77],live:73,local:[71,74],locat:77,look:[10,70,71],m2r:71,m_recon:9,machin:[0,70],made:15,main:[10,73,75,77],make:[8,70,71,77],makefil:[70,71],manag:10,mandic:2,manipul:70,manocha:69,map:0,master:[72,74],mat:57,matc:55,match:55,mathia:9,matlab:8,matric:[3,4,5,6,7,9,11,13,16,17,18,20,21,24,26,46,47],matrix:[3,4,7,9,15,16,17,19,20,21,22,23,24,25,26,27,55,57,58,70],matter:8,max:[28,55],max_it:[0,3,4,6,7,9],maximum:[3,4,6,7,9],mean:[0,1,2,35,36,38,73],meaning:74,meet:15,memori:15,menu:[10,74],merg:[73,74],messag:73,meta:[3,4,5,7,8,15,16,17,18,40,70,78],method:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,59,62,64,70],metric:[15,35,36,37,38,68,70,76],might:60,min:[28,55],miniconda3:71,minor:[72,73],minut:73,mismatch:34,miss:[4,5,71],ml_rank:41,mlst:9,mode:[0,3,4,5,7,8,10,11,12,15,16,17,18,19,22,23,25,26,27,29,31,39,40,45,46,47,48,55,58,70,74,77],mode_descript:70,mode_index:[15,16,17,18,40],mode_n_product:[15,70],mode_nam:[15,16,17,18,40],mode_ord:15,modeerror:15,model:[0,1,2,6,59,70,75],modifi:[15,77],modified_fil:74,modul:[43,50,52,59,60,62,63,64,65,66,67,70,71,76],moment:[19,22,73],mon:[39,40],moniri:[2,69],month:[15,16,17,18,39,40],more:[15,70,72,74],morten:9,most:[16,17,18,60,70],much:[22,23,70,73],multi:[3,7,9,17,39,40,41,42,47,68,70,76,78],multidimension:[2,4,5,8,15,41,70],multidimnesion:15,multilinear:[4,5],multipli:[15,25],must:[0,1,2,55,73],my_line_plot:10,mybind:76,myfeatur:73,n_column:24,n_job:[1,2],n_row:24,n_sampl:28,name:[0,1,2,3,4,5,6,7,8,9,15,16,17,18,39,40,45,46,47,48,70],natur:[11,12],ndarrai:[0,1,2,3,6,9,13,15,16,17,18,19,20,21,22,23,24,25,26,27,51,55,57],necess:73,necessarili:60,need:[71,73,74,76,77],network:0,never:71,new_nam:15,new_object:[15,16,17,18],next:[70,72,73,74,77],nilsson:9,non:[70,76],none:[1,2,3,4,6,7,9,15,16,17,18,20,21,24,26,39,40,43,44,50,51,52,53,54,55,58],norm:15,normal:[15,40],normal_shap:15,notabl:70,note:[1,2,3,4,6,7,8,10,11,12,15,16,17,18,19,22,23,25],notebook:60,noth:15,now:70,number:[1,2,3,4,6,7,9,15,16,17,18,21,25,26,28,43,46,47,50,52,53,73],numpi:[15,16,17,18,39,40,43,50,52,70,71],numpydoc:71,object:[1,2,3,4,5,6,7,8,9,11,12,14,15,16,17,18,70,75],obtain:9,off:73,offici:[70,72,74,77],often:[16,17,18],onc:60,one:[3,6,7,9,11,12,13,15,39,45,46,47,48],ones:[10,16,17,18,45,46,47,48,51,52],onli:[1,2,3,4,5,6,7,8,9,11,15,16,17,18,39,51,70,72,73,74],open:[71,75],oper:[15,19,22,25,31,32,33,68,70,76],opposit:8,optim:[0,42,70],optimal_rank:42,option:[3,4,7,10,43,50,52,53,55,70,75,77],order:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,20,21,24,26,28,39,45,46,47,48,51,52,53,70,71,74,77],ordereddict:70,org:[7,26,74,76,77],origin:[3,6,7,15,19,22,70,73,74],orthogon:4,oseledet:8,other:12,otherwis:2,our:[70,72,75,76,77,78],out:[1,2,10,78],outcom:[0,1,2],outlin:74,output:[0,1,2,3,4,5,6,7,8,9,10,16,17,18,42,55,70,71],overwrit:15,own:74,packag:[60,65,71,74,77],page:[70,74,76],panda:[39,40,68,70,76,78],papalexaki:9,parafac2:70,parallel:[1,2],param:[0,1,2],paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,55,56,57,58,70],part:[0,6,71],pass:70,patch:75,pct:50,pdtool:[39,40],penalti:0,per:12,percentag:[35,50],perform:[1,2,3,4,5,6,7,8,9,15,20,21,24,26,31,32,33,64,71],permit:15,perspect:0,physic:[16,17,18,48],pip:[71,77],pipenv:[70,74],place:[70,74],placehold:[16,17,18],pleas:[75,77,78],plot:[3,4,5,6,7,8,9,10,11,12,13],point:[72,73,74],polyad:[3,7,70],popul:[39,40],posit:[1,2,4,28],possibl:[0,1,2,70],practic:[7,26,74],predict:[0,1,2],predict_proba:[0,1,2],prefer:74,prepar:73,presum:15,previou:71,print:[15,16,17,18,39,40,45,46,47,48],prior:[0,2],probabl:[0,1,2,3,6,7],process:[2,4,5,74],prod:24,produc:[15,16,17,18,70],product:[3,6,7,15,20,21,24,25,26,73,74],project:[70,75],prompt:70,properti:[3,4,5,6,7,8,9,15,16,17,18,46,47,48,70],provid:[0,1,2,15,60,70,71],provision:[70,77],pull:[73,74,75,76],purpos:14,push:[73,74],put:70,pypi:[74,77],pytest:[70,71,77],python:[3,6,7,70,74],quick:70,r_1:[17,18],r_2:[17,18],r_3:17,rais:[1,2,15,16,17,18,29,30,31,32,33,40],rand:[45,46,47,48],randn:[45,46,47,48],random:[3,6,7,9,26,43,50,52,53,55],random_st:[3,4,6,7,9],randomis:[7,70],randomisedcpd:70,rank:[3,4,5,6,7,8,9,16,17,18,41,42,46,47,48,51,68,70,76],rank_rang:42,rao:[3,6,7,21,26],rasmu:9,rasmussen:9,reach:73,read:[71,77],readi:[73,74],realli:8,reconstruct:[6,8,9,16,17,18,46,47,48,70],record:74,redefin:70,reduct:0,refactor:60,refer:[0,2,6,7,9,15,16,17,18,26,74],reflect:[70,73],regress:76,rel:[0,1,2,3,4,6,7,9,37,42],relat:[3,6,7,11,12,34],releas:[70,72,77],relev:74,rememb:15,remot:74,renam:[15,16,17,18,70],repo:74,report:71,repositori:[74,77,78],repres:[1,2,10,11,12,16,17,18,39,40,46,47,48],represent:[3,4,5,6,7,8,11,12,15,16,17,18,46,47,48,68,70,78],request:[73,74,75,76],requir:[15,60,70,71],reset:[15,16,17,18],reset_meta:15,reset_mode_index:[15,16,17,18],reset_mode_nam:[15,16,17,18],reshap:[8,15,40],resid:70,residu:49,residual_tensor:70,respect:[0,1,2,3,6,7,8,9,15,16,17,39,45,46,47,48,70],rest:46,restrict:70,result:[1,2,8,15,20,21,24,25,26,40],return_cent:28,reveal:9,revers:[3,6,7,20,21,24,26],revert:[19,22],root:38,rotat:15,row:[46,47,70],rtype:15,run:[1,2,71,76],sael:9,same:[0,15,20,21,25,26,47,73],sampl:[0,1,2,7,26,70],sample_s:[7,26],scalabl:9,scale:0,scalzo:69,scikit:72,score:[0,1,2,68],scout:9,search:[1,2,76],search_param:[1,2],second:77,see:[15,71,74],select:[10,11,12,74],self:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18],semant:70,send:75,separ:70,sequenc:70,server:74,set:[0,1,2,4,5,10,15,16,17,18,29,30,55,70],set_index:39,set_mode_index:[15,16,17,18,40],set_mode_nam:[15,16,17,18],set_param:0,set_params_base_clf:[1,2],setup:[70,75],sever:70,shape:[15,16,17,18,19,20,21,22,23,24,25,27,32,43,45,46,47,48,50,51,52,53,55,70,72,73],share:15,should:[2,3,6,7,9,10,15,16,17,18,20,21,25,26,46,47,70,71,72,73,74],shouldn:15,show:15,show_stat:15,showcas:62,siam:[7,26],side:71,signal:2,signatur:10,simpli:[71,77],simplifi:[45,46,47,48],sinc:15,singular:5,size:[0,15,25,28,39,45,46,47,48,51,52,53,70,71],skip:[4,20,21,24,26,70],skip_matrix:[20,21,24,26],sklearn:2,sklearnclassifi:2,slice:[15,43,50,55],slider:[10,11,12],slow:[0,2],slower:[22,23],softwar:71,solver:0,some:[15,70,71,72],somehow:73,someth:[3,6,7],sort:[1,2],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,70,71,73,77],space:15,spars:50,special:70,specif:[18,75],specifi:[1,2,3,4,5,6,7,8,9,10,15,16,17,18,23,25,27,28,40,43,46,47,50,51,52,53,70],specificaiton:71,sphinx:[70,71],split:[1,2],squar:[0,3,6,7,9,36,38,70],stabl:[72,73,77],stackoverflow:74,standard:28,start:[71,77],state:[15,30,33,40,70,71,73,74],stateerror:15,statement:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,71],statist:[70,76],statu:77,std:28,stem:74,step:[10,71,73,74],stm:[0,70],stop:0,store:70,str:[3,4,5,6,7,8,9,10,15,16,17,18,40,43,45,46,47,48,50,52],strategi:[1,2],string:[1,2],structur:[9,56,57,58,60,68,70,71,76],style:71,submit:[71,74],subtensor:15,suggest:75,suit:77,summari:73,summat:70,super_diag_tensor:70,support:[0,2,70,72],sure:[71,76,77],svd:[3,7,8],symmetr:56,symmetricis:53,sync:74,synthet:[67,68],t_recon:9,tag:[72,73],take:[8,70,74],target:[0,1,2,73],team:76,tel:70,telvac:70,telvi:70,templat:70,ten:6,tenl:6,tensor:[0,1,2,3,4,5,6,7,8,9,11,12,16,17,18,19,22,23,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,55,56,58,67,68,70,78],tensor_approx:49,tensor_cpd:[3,7,16,46],tensor_orig:49,tensor_pr:[35,36,37,38],tensor_rep:[10,11,12],tensor_tkd:[4,5,17,47],tensor_tru:[35,36,37,38],tensor_tt:[8,18,48],tensorcpd:[2,3,7,10,11,14,15,17,18,34,35,36,37,38,46,49,60,70,78],tensorstateerror:[15,40],tensortkd:[2,4,5,10,12,15,16,18,34,35,36,37,38,47,49,60,70,78],tensortopologyerror:[16,17,18],tensortt:[8,15,16,17,34,35,36,37,38,48,49,70,78],term:[0,71],test:[0,1,2,14,42,62,70,74,75,76],text:71,thank:70,thei:[1,2,10,55,70],them:74,theoret:78,therefor:[70,73,74,77],therein:77,thi:[0,2,3,6,7,8,10,11,12,15,16,17,18,25,39,45,46,47,48,51,59,60,63,64,65,70,71,73,74,76,77],three:6,threshold:[3,4,6,7,9,42],through:[1,2,16,17,18,60,70,73],thrown:2,thu:60,time:[8,16,17,18,70],tkd:17,toeplitz:[55,57,58],toggl:70,tol:[0,3,4,6,7,9],toler:0,tool:[68,70,71,74,76],top:[71,74,77],track:70,train:[0,1,2,8,18,48],transform:[15,78],travi:70,trend:0,ttsvd:70,tucker:[4,5,12,17,47,70],tupl:[3,4,5,6,7,8,9,15,16,17,18,19,22,26,28,41,42,43,45,46,47,48,50,51,52,53,55,70],tutori:76,two:[9,10,55,70,77],type:[3,4,7,10,15,42,70,71,72],typeerror:[1,2,15],uncertainti:15,under:[70,71,74,76,77],undesir:73,undo:15,unfold:[15,19,22,23,25,70],uniform:[43,50],union:[1,2],unit:[70,71],unreleas:76,until:77,upcom:73,updat:[10,70,74],upon:73,upstream:74,use:[40,70,71],used:[2,3,6,7,9,10,16,17,18,45,46,47,48,55,63,70,73],useful:71,using:[6,9,43,50,52,70,71,74,77],util:[43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,68,70,71,76],utilis:70,valid:[1,2,56,57,58,68,70,75],valu:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,39,40,42,45,46,47,48,51,52,53,55,70],valueerror:[1,2,15],variabl:10,variou:[59,62,70],vbox:10,vector:[2,10,11,12,51],vectoris:[15,70],verbos:[0,1,2,3,4,5,6,7,8,9,42],veri:73,verifi:[71,74],versa:70,version:[15,19,22,23,27,70,72,73,74,77],via:[3,4,5,6,7,9,70],video:71,vise:70,visit:70,visualis:[10,11,12,13,14,68,76],wai:[10,15,74,77],want:[70,74],warn:63,web:71,webpag:70,websit:72,wed:[39,40],weight:0,weights_:0,welcom:76,what:10,when:[10,29,30,31,32,33,46,47,48,70,72,73,74],whenev:73,where:[15,24,73],wherea:[51,52,53],whether:[0,2,70],which:[1,2,10,11,12,13,15,16,17,18,19,22,23,25,27,31,32,33,41,42,51,55,60,70,73,74,77],whose:[15,16,17,18],widget:10,wish:77,within:[0,60,62],without:[15,71,76],work:[15,60,74],write_subtensor:15,y_pred:[0,1,2],y_pred_proba:[1,2],year:[15,16,17,18,39,40],you:[15,70,71,73,74,75,76,77],your:[73,75,77],youtub:71,zero:[10,52]},titles:["LSSTM","TelVAC","TelVI","CPD","HOOI","HOSVD","Parafac2","RandomisedCPD","TTSVD","CMTF","BaseComponentPlot","ComponentPlotCPD","ComponentPlotTKD","gen_test_data","gen_test_tensor_cpd","Tensor","TensorCPD","TensorTKD","TensorTT","fold","hadamard","khatri_rao","kolda_fold","kolda_unfold","kronecker","mode_n_product","sampled_khatri_rao","unfold","make_clusters","ModeError","StateError","TensorModeError","TensorShapeError","TensorStateError","TensorTopologyError","mape","mse","residual_rel_error","rmse","pd_to_tensor","tensor_to_pd","mlrank","rankest","dense_tensor","hankel_matrix","quick_tensor","quick_tensorcpd","quick_tensortkd","quick_tensortt","residual_tensor","sparse_tensor","super_diag_tensor","super_diagonal_tensor","super_symmetric_tensor","toeplitz_matrix","toeplitz_tensor","is_super_symmetric","is_toeplitz_matrix","is_toeplitz_tensor","Algorithms","Experimental features","Core Structures and Operations","Datasets","Custom Exceptions","Metrics","Pandas Integration Tools","Multi-dimensional Rank","Utility Functions","HOTTBOX API","Our Team","Changelog","Before pull request","General guidelines and advices","Git branching model","How to contribute","Development guide","HOTTBOX: Higher Order Tensors ToolBOX","Installing HOTTBOX","HOTTBOX Tutorials"],titleterms:{"function":[60,67],Added:70,advic:72,advis:72,algorithm:59,api:[68,72],approxim:64,arrai:67,basecomponentplot:10,befor:71,branch:[70,72,73],broken:71,chang:70,changelog:70,classif:[59,64],cmtf:9,code:[71,72],componentplotcpd:11,componentplottkd:12,content:[70,71,72,73,74],contribut:74,convers:65,core:61,cpd:3,custom:63,dashboard:60,data:59,dataset:62,date:74,decomposit:59,dense_tensor:43,develop:[70,73,74,75],dimension:[66,67],docker:71,document:71,error:63,estim:66,except:63,experiment:60,featur:[60,73],fix:70,fold:19,fusion:59,gen_test_data:13,gen_test_tensor_cpd:14,gener:[67,72],get:74,git:[72,73],guid:75,guidelin:72,hadamard:20,hankel_matrix:44,helper:60,higher:76,hooi:4,hosvd:5,hotfix:73,hottbox:[68,70,72,76,77,78],how:74,indic:76,initi:74,instal:77,integr:65,interact:60,is_super_symmetr:56,is_toeplitz_matrix:57,is_toeplitz_tensor:58,isn:71,khatri_rao:21,kolda_fold:22,kolda_unfold:23,kroneck:24,linear:[59,61],lsstm:0,main:74,make_clust:28,mape:35,master:73,metric:64,mlrank:41,mode_n_product:25,modeerror:29,model:[72,73],mse:36,multi:[59,61,66],object:72,oper:61,option:71,order:76,our:69,packag:70,panda:65,parafac2:6,pd_to_tensor:39,project:74,pull:71,quick_tensor:45,quick_tensorcpd:46,quick_tensortkd:47,quick_tensortt:48,randomisedcpd:7,rank:66,rankest:42,releas:73,remov:70,represent:61,request:71,residual_rel_error:37,residual_tensor:49,rmse:38,run:77,sampled_khatri_rao:26,score:64,setup:74,sparse_tensor:50,stateerror:30,statu:70,structur:61,super_diag_tensor:51,super_diagonal_tensor:52,super_symmetric_tensor:53,support:73,synthet:62,tabl:[70,71,72,73,74,76],team:69,telvac:1,telvi:2,tensor:[15,59,61,76],tensor_to_pd:40,tensorcpd:16,tensormodeerror:31,tensorshapeerror:32,tensorstateerror:33,tensortkd:17,tensortopologyerror:34,tensortt:18,test:[71,77],toeplitz_matrix:54,toeplitz_tensor:55,tool:65,toolbox:76,ttsvd:8,tutori:78,unfold:27,unreleas:70,util:[65,67],valid:[67,71],visualis:60,your:[71,74]}})