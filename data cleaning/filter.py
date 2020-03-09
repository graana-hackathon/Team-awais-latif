import pandas as pd 
  
cols_to_remove = ['MSSubClass',
                  'MSZoning',
                  'LotFrontage',
                  'Alley',
                  'LandContour',
                  'LandSlope',
                  'Neighborhood',
                  'Condition1',
                  'Condition2',
                  'YearRemodAdd',
                  'Exterior1st',
                  'Exterior2nd',
                  'MasVnrType',
                  'MasVnrArea',
                  'ExterQual',
                  'ExterCond',
                  'Foundation',
                  'BsmtExposure',
                  'BsmtFinType1',
                  'BsmtFinSF1',
                  'BsmtFinType2',
                  'BsmtFinSF2',
                  'BsmtUnfSF',
                  'HeatingQC',
                  'Electrical',
                  'LowQualFinSF',
                  'Functional',
                  'Fireplaces',
                  'FireplaceQu',
                  'GarageYrBlt',
                  'GarageCars',
                  'GarageFinish',
                  'GarageQual',
                  'GarageCond',
                  'PavedDrive',
                  'Fence',
                  'EnclosedPorch',
                  '3SsnPorch',
                  'ScreenPorch',
                  'OpenPorchSF',
                  'WoodDeckSF',
                  'PoolArea',
                  'PoolQC',
                  'MiscFeature',
                  'MiscVal',
                  'MoSold',
                  ]

path = "filtered_data.csv"

data = pd.read_csv("train.csv")
data = data.drop(cols_to_remove, axis=1)

data.to_csv (path, index = False, header=True)
print(data)
