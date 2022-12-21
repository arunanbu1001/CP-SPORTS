#include<stdio.h>
void main()
{
    int nr,c=1,blk,i,j;
    printf("enter the rows");
    scanf("%d",&nr);
    for ( i = 0; i < nr; i++)
    {
        for (blk = 1; blk < nr; blk++)
        printf(" ");
        for (j = 0; j <=i; j++)
             
        {
          if (j==0||i==0)
          {
            c=1;
          }
           else
           c=c*(i-j+1)/j;
           printf("%4d",c);

        }
        
    }
    
}
